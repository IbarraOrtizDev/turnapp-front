import { computed, h, getCurrentInstance, onDeactivated, onBeforeUnmount, ref, nextTick, watch, onMounted } from 'vue';
import { P as Platform, g as createComponent, r as prevent, j as addEvt, i as cleanEvt, x as listenOpts, z as noop, t as client } from '../build/server.mjs';
import { b as hSlot } from './use-dark.mjs';
import { v as vmIsDestroyed, i as isKeyCode, b as vmHasRouter, f as getParentProxy } from './focus-manager.mjs';
import { d as getScrollbarWidth } from './scroll.mjs';

function clearSelection () {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    }
    else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  }
  else if (document.selection !== void 0) {
    document.selection.empty();
  }
}

const __nuxt_component_2$1 = createComponent({
  name: 'QItemSection',

  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-item__section column'
      + ` q-item__section--${ props.avatar === true || props.side === true || props.thumbnail === true ? 'side' : 'main' }`
      + (props.top === true ? ' q-item__section--top justify-start' : ' justify-center')
      + (props.avatar === true ? ' q-item__section--avatar' : '')
      + (props.thumbnail === true ? ' q-item__section--thumbnail' : '')
      + (props.noWrap === true ? ' q-item__section--nowrap' : '')
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

/*
 * Usage:
 *    registerTimeout(fn[, delay])
 *    removeTimeout()
 */

function useTimeout () {
  let timer = null;
  const vm = getCurrentInstance();

  function removeTimeout () {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);

  return {
    removeTimeout,

    registerTimeout (fn, delay) {
      removeTimeout();

      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  }
}

const useAnchorStaticProps = {
  /* SSR does not know about Element */
  target: { default: true }
    ,

  noParentEvent: Boolean
};

const useAnchorProps = {
  ...useAnchorStaticProps,
  contextMenu: Boolean
};

function useAnchor ({
  showing,
  avoidEmit, // required for QPopupProxy (true)
  configureAnchorEl // optional
}) {
  const { props, proxy, emit } = getCurrentInstance();

  const anchorEl = ref(null);

  let touchTimer = null;

  function canShow (evt) {
    // abort with no parent configured or on multi-touch
    return anchorEl.value === null
      ? false
      : (evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1)
  }

  const anchorEvents = {};

  if (configureAnchorEl === void 0) {
    // default configureAnchorEl is designed for
    // QMenu & QPopupProxy (which is why it's handled here)

    Object.assign(anchorEvents, {
      hide (evt) {
        proxy.hide(evt);
      },

      toggle (evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },

      toggleKey (evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },

      contextClick (evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },

      prevent,

      mobileTouch (evt) {
        anchorEvents.mobileCleanup(evt);

        if (canShow(evt) !== true) {
          return
        }

        proxy.hide(evt);
        anchorEl.value.classList.add('non-selectable');

        const target = evt.target;
        addEvt(anchorEvents, 'anchor', [
          [ target, 'touchmove', 'mobileCleanup', 'passive' ],
          [ target, 'touchend', 'mobileCleanup', 'passive' ],
          [ target, 'touchcancel', 'mobileCleanup', 'passive' ],
          [ anchorEl.value, 'contextmenu', 'prevent', 'notPassive' ]
        ]);

        touchTimer = setTimeout(() => {
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },

      mobileCleanup (evt) {
        anchorEl.value.classList.remove('non-selectable');

        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }

        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });

    configureAnchorEl = function (context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null) return

      let evts;

      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [ anchorEl.value, 'touchstart', 'mobileTouch', 'passive' ]
          ];
        }
        else {
          evts = [
            [ anchorEl.value, 'mousedown', 'hide', 'passive' ],
            [ anchorEl.value, 'contextmenu', 'contextClick', 'notPassive' ]
          ];
        }
      }
      else {
        evts = [
          [ anchorEl.value, 'click', 'toggle', 'passive' ],
          [ anchorEl.value, 'keyup', 'toggleKey', 'passive' ]
        ];
      }

      addEvt(anchorEvents, 'anchor', evts);
    };
  }

  function unconfigureAnchorEl () {
    cleanEvt(anchorEvents, 'anchor');
  }

  function setAnchorEl (el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains('q-anchor--skip')) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }

  function pickAnchorEl () {
    if (props.target === false || props.target === '' || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    }
    else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    }
    else {
      let el = props.target;

      if (typeof props.target === 'string') {
        try {
          el = document.querySelector(props.target);
        }
        catch (err) {
          el = void 0;
        }
      }

      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      }
      else {
        anchorEl.value = null;
        console.error(`Anchor: target "${ props.target }" not found`);
      }
    }
  }

  watch(() => props.contextMenu, val => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });

  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }

    pickAnchorEl();
  });

  watch(() => props.noParentEvent, val => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      }
      else {
        configureAnchorEl();
      }
    }
  });

  onMounted(() => {
    pickAnchorEl();

    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit('update:modelValue', false);
    }
  });

  onBeforeUnmount(() => {
    touchTimer !== null && clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });

  return {
    anchorEl,
    canShow,
    anchorEvents
  }
}

function useScrollTarget (props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;

  function changeScrollEvent (scrollTarget, fn) {
    const fnProp = `${ fn !== void 0 ? 'add' : 'remove' }EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;

    if (scrollTarget !== window) {
      scrollTarget[ fnProp ]('scroll', fnHandler, listenOpts.passive);
    }

    window[ fnProp ]('scroll', fnHandler, listenOpts.passive);

    scrollFn = fn;
  }

  function unconfigureScrollTarget () {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }

  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });

  onBeforeUnmount(noParentEventWatcher);

  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  }
}

const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },

  'onUpdate:modelValue': [ Function, Array ]
};

const useModelToggleEmits = [
  'beforeShow', 'show', 'beforeHide', 'hide'
];

// handleShow/handleHide -> removeTick(), self (& emit show)

function useModelToggle ({
  showing,
  canShow, // optional
  hideOnRouteChange, // optional
  handleShow, // optional
  handleHide, // optional
  processOnMount // optional
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;

  let payload;

  function toggle (evt) {
    if (showing.value === true) ;
    else {
      show(evt);
    }
  }

  function show (evt) {
    if (
      props.disable === true
      || (evt !== void 0 && evt.qAnchorHandled === true)
      || (canShow !== void 0 && canShow(evt) !== true)
    ) {
      return
    }

    const listener = props[ 'onUpdate:modelValue' ] !== void 0;

    if (listener === true && true !== true) {
      emit('update:modelValue', true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }

    if (props.modelValue === null || listener === false || true) {
      processShow(evt);
    }
  }

  function processShow (evt) {
    if (showing.value === true) {
      return
    }

    showing.value = true;

    emit('beforeShow', evt);

    if (handleShow !== void 0) {
      handleShow(evt);
    }
    else {
      emit('show', evt);
    }
  }

  function hide (evt) {
    {
      return
    }
  }

  function processHide (evt) {
    if (showing.value === false) {
      return
    }

    showing.value = false;

    emit('beforeHide', evt);

    if (handleHide !== void 0) {
      handleHide(evt);
    }
    else {
      emit('hide', evt);
    }
  }

  function processModelChange (val) {
    if (props.disable === true && val === true) {
      if (props[ 'onUpdate:modelValue' ] !== void 0) {
        emit('update:modelValue', false);
      }
    }
    else if ((val === true) !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }

  watch(() => props.modelValue, processModelChange);

  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) ;
    });
  }

  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });

  // expose public methods
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);

  return publicMethods
}

const portalProxyList = [];

function closePortalMenus (proxy, evt) {
  do {
    if (proxy.$options.name === 'QMenu') {
      proxy.hide(evt);

      // is this a point of separation?
      if (proxy.$props.separateClosePopup === true) {
        return getParentProxy(proxy)
      }
    }
    else if (proxy.__qPortal === true) {
      // treat it as point of separation if parent is QPopupProxy
      // (so mobile matches desktop behavior)
      // and hide it too
      const parent = getParentProxy(proxy);

      if (parent !== void 0 && parent.$options.name === 'QPopupProxy') {
        proxy.hide(evt);
        return parent
      }
      else {
        return proxy
      }
    }

    proxy = getParentProxy(proxy);
  } while (proxy !== void 0 && proxy !== null)
}

/**
 * Noop internal component to ease testing
 * of the teleported content.
 *
 * const wrapper = mount(QDialog, { ... })
 * const teleportedWrapper = wrapper.findComponent({ name: 'QPortal' })
 */
createComponent({
  name: 'QPortal',
  setup (_, { slots }) {
    return () => slots.default()
  }
});

// Warning!
// You MUST specify "inheritAttrs: false" in your component

function usePortal (vm, innerRef, renderPortalContent, type) {
  // showing, including while in show/hide transition
  const portalIsActive = ref(false);

  // showing & not in any show/hide transition
  const portalIsAccessible = ref(false);

  {
    return {
      portalIsActive,
      portalIsAccessible,

      showPortal: noop,
      hidePortal: noop,
      renderPortal: noop
    }
  }
}

const useTransitionProps = {
  transitionShow: {
    type: String,
    default: 'fade'
  },

  transitionHide: {
    type: String,
    default: 'fade'
  },

  transitionDuration: {
    type: [ String, Number ],
    default: 300
  }
};

function useTransition (props, defaultShowFn = () => {}, defaultHideFn = () => {}) {
  return {
    transitionProps: computed(() => {
      const show = `q-transition--${ props.transitionShow || defaultShowFn() }`;
      const hide = `q-transition--${ props.transitionHide || defaultHideFn() }`;

      return {
        appear: true,

        enterFromClass: `${ show }-enter-from`,
        enterActiveClass: `${ show }-enter-active`,
        enterToClass: `${ show }-enter-to`,

        leaveFromClass: `${ hide }-leave-from`,
        leaveActiveClass: `${ hide }-leave-active`,
        leaveToClass: `${ hide }-leave-to`
      }
    }),

    transitionStyle: computed(() => `--q-transition-duration: ${ props.transitionDuration }ms`)
  }
}

/*
 * Usage:
 *    registerTick(fn)
 *    removeTick()
 */

function useTick () {
  let tickFn;
  const vm = getCurrentInstance();

  function removeTick () {
    tickFn = void 0;
  }

  onDeactivated(removeTick);
  onBeforeUnmount(removeTick);

  return {
    removeTick,

    registerTick (fn) {
      tickFn = fn;

      nextTick(() => {
        if (tickFn === fn) {
          // we also check if VM is destroyed, since if it
          // got to trigger one nextTick() we cannot stop it
          vmIsDestroyed(vm) === false && tickFn();
          tickFn = void 0;
        }
      });
    }
  }
}

const
  { notPassiveCapture } = listenOpts,
  registeredList = [];

function globalHandler (evt) {

  const target = evt.target;

  if (
    target === void 0
    || target.nodeType === 8
    || target.classList.contains('no-pointer-events') === true
  ) {
    return
  }

  // check last portal vm if it's
  // a QDialog and not in seamless mode
  let portalIndex = portalProxyList.length - 1;

  while (portalIndex >= 0) {
    const proxy = portalProxyList[ portalIndex ].$;

    // skip QTooltip portals
    if (proxy.type.name === 'QTooltip') {
      portalIndex--;
      continue
    }

    if (proxy.type.name !== 'QDialog') {
      break
    }

    if (proxy.props.seamless !== true) {
      return
    }

    portalIndex--;
  }

  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[ i ];

    if (
      (
        state.anchorEl.value === null
        || state.anchorEl.value.contains(target) === false
      )
      && (
        target === document.body
        || (
          state.innerRef.value !== null
          && state.innerRef.value.contains(target) === false
        )
      )
    ) {
      // mark the event as being processed by clickOutside
      // used to prevent refocus after menu close
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    }
    else {
      return
    }
  }
}

function addClickOutside (clickOutsideProps) {
  registeredList.push(clickOutsideProps);

  if (registeredList.length === 1) {
    document.addEventListener('mousedown', globalHandler, notPassiveCapture);
    document.addEventListener('touchstart', globalHandler, notPassiveCapture);
  }
}

function removeClickOutside (clickOutsideProps) {
  const index = registeredList.findIndex(h => h === clickOutsideProps);

  if (index !== -1) {
    registeredList.splice(index, 1);

    if (registeredList.length === 0) {

      document.removeEventListener('mousedown', globalHandler, notPassiveCapture);
      document.removeEventListener('touchstart', globalHandler, notPassiveCapture);
    }
  }
}

let vpLeft, vpTop;

function validatePosition (pos) {
  const parts = pos.split(' ');
  if (parts.length !== 2) {
    return false
  }
  if ([ 'top', 'center', 'bottom' ].includes(parts[ 0 ]) !== true) {
    console.error('Anchor/Self position must start with one of top/center/bottom');
    return false
  }
  if ([ 'left', 'middle', 'right', 'start', 'end' ].includes(parts[ 1 ]) !== true) {
    console.error('Anchor/Self position must end with one of left/middle/right/start/end');
    return false
  }
  return true
}

function validateOffset (val) {
  if (!val) { return true }
  if (val.length !== 2) { return false }
  if (typeof val[ 0 ] !== 'number' || typeof val[ 1 ] !== 'number') {
    return false
  }
  return true
}

const horizontalPos = {
  'start#ltr': 'left',
  'start#rtl': 'right',
  'end#ltr': 'right',
  'end#rtl': 'left'
}

;[ 'left', 'middle', 'right' ].forEach(pos => {
  horizontalPos[ `${ pos }#ltr` ] = pos;
  horizontalPos[ `${ pos }#rtl` ] = pos;
});

function parsePosition (pos, rtl) {
  const parts = pos.split(' ');
  return {
    vertical: parts[ 0 ],
    horizontal: horizontalPos[ `${ parts[ 1 ] }#${ rtl === true ? 'rtl' : 'ltr' }` ]
  }
}

function getAnchorProps (el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect();

  if (offset !== void 0) {
    top -= offset[ 1 ];
    left -= offset[ 0 ];
    bottom += offset[ 1 ];
    right += offset[ 0 ];

    width += offset[ 0 ];
    height += offset[ 1 ];
  }

  return {
    top, bottom, height,
    left, right, width,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  }
}

function getAbsoluteAnchorProps (el, absoluteOffset, offset) {
  let { top, left } = el.getBoundingClientRect();

  top += absoluteOffset.top;
  left += absoluteOffset.left;

  if (offset !== void 0) {
    top += offset[ 1 ];
    left += offset[ 0 ];
  }

  return {
    top, bottom: top + 1, height: 1,
    left, right: left + 1, width: 1,
    middle: left,
    center: top
  }
}

function getTargetProps (width, height) {
  return {
    top: 0,
    center: height / 2,
    bottom: height,
    left: 0,
    middle: width / 2,
    right: width
  }
}

function getTopLeftProps (anchorProps, targetProps, anchorOrigin, selfOrigin) {
  return {
    top: anchorProps[ anchorOrigin.vertical ] - targetProps[ selfOrigin.vertical ],
    left: anchorProps[ anchorOrigin.horizontal ] - targetProps[ selfOrigin.horizontal ]
  }
}

function setPosition (cfg, retryNumber = 0) {
  if (
    cfg.targetEl === null
    || cfg.anchorEl === null
    || retryNumber > 5 // we should try only a few times
  ) {
    return
  }

  // some browsers report zero height or width because
  // we are trying too early to get these dimensions
  if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      setPosition(cfg, retryNumber + 1);
    }, 10);
    return
  }

  const {
    targetEl,
    offset,
    anchorEl,
    anchorOrigin,
    selfOrigin,
    absoluteOffset,
    fit,
    cover,
    maxHeight,
    maxWidth
  } = cfg;

  if (client.is.ios === true && window.visualViewport !== void 0) {
    // uses the q-position-engine CSS class

    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;

    if (left !== vpLeft) {
      el.setProperty('--q-pe-left', left + 'px');
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty('--q-pe-top', top + 'px');
      vpTop = top;
    }
  }

  // scroll position might change
  // if max-height/-width changes, so we
  // need to restore it after we calculate
  // the new positioning
  const { scrollLeft, scrollTop } = targetEl;

  const anchorProps = absoluteOffset === void 0
    ? getAnchorProps(anchorEl, cover === true ? [ 0, 0 ] : offset)
    : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);

  // we "reset" the critical CSS properties
  // so we can take an accurate measurement
  Object.assign(targetEl.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: maxWidth || '100vw',
    maxHeight: maxHeight || '100vh',
    visibility: 'visible'
  });

  const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
  const { elWidth, elHeight } = fit === true || cover === true
    ? { elWidth: Math.max(anchorProps.width, origElWidth), elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight }
    : { elWidth: origElWidth, elHeight: origElHeight };

  let elStyle = { maxWidth, maxHeight };

  if (fit === true || cover === true) {
    elStyle.minWidth = anchorProps.width + 'px';
    if (cover === true) {
      elStyle.minHeight = anchorProps.height + 'px';
    }
  }

  Object.assign(targetEl.style, elStyle);

  const targetProps = getTargetProps(elWidth, elHeight);
  let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);

  if (absoluteOffset === void 0 || offset === void 0) {
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
  }
  else { // we have touch position or context menu with offset
    const { top, left } = props; // cache initial values

    // apply initial boundaries
    applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);

    let hasChanged = false;

    // did it flip vertically?
    if (props.top !== top) {
      hasChanged = true;
      const offsetY = 2 * offset[ 1 ];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }

    // did it flip horizontally?
    if (props.left !== left) {
      hasChanged = true;
      const offsetX = 2 * offset[ 0 ];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }

    if (hasChanged === true) {
      // re-calculate props with the new anchor
      props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);

      // and re-apply boundaries
      applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
    }
  }

  elStyle = {
    top: props.top + 'px',
    left: props.left + 'px'
  };

  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + 'px';

    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + 'px';

    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }

  Object.assign(targetEl.style, elStyle);

  // restore scroll position
  if (targetEl.scrollTop !== scrollTop) {
    targetEl.scrollTop = scrollTop;
  }
  if (targetEl.scrollLeft !== scrollLeft) {
    targetEl.scrollLeft = scrollLeft;
  }
}

function applyBoundaries (props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const
    currentHeight = targetProps.bottom,
    currentWidth = targetProps.right,
    margin = getScrollbarWidth(),
    innerHeight = window.innerHeight - margin,
    innerWidth = document.body.clientWidth;

  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === 'center') {
      props.top = anchorProps[ anchorOrigin.vertical ] > innerHeight / 2
        ? Math.max(0, innerHeight - currentHeight)
        : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    }
    else if (anchorProps[ anchorOrigin.vertical ] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === 'center'
          ? anchorProps.center
          : (anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top)
      );
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    }
    else {
      props.top = Math.max(0, anchorOrigin.vertical === 'center'
        ? anchorProps.center
        : (anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom)
      );
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }

  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === 'middle') {
      props.left = anchorProps[ anchorOrigin.horizontal ] > innerWidth / 2
        ? Math.max(0, innerWidth - currentWidth)
        : 0;
    }
    else if (anchorProps[ anchorOrigin.horizontal ] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === 'middle'
          ? anchorProps.middle
          : (anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left)
      );
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    }
    else {
      props.left = Math.max(0, anchorOrigin.horizontal === 'middle'
        ? anchorProps.middle
        : (anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right)
      );
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}

export { __nuxt_component_2$1 as _, useAnchorStaticProps as a, useModelToggleProps as b, useTransitionProps as c, validateOffset as d, useModelToggleEmits as e, useTick as f, useTransition as g, useScrollTarget as h, useAnchor as i, useModelToggle as j, usePortal as k, clearSelection as l, addClickOutside as m, useAnchorProps as n, closePortalMenus as o, parsePosition as p, removeClickOutside as r, setPosition as s, useTimeout as u, validatePosition as v };
//# sourceMappingURL=position-engine.mjs.map
