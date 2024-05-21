import { _ as __nuxt_component_0$1 } from './nuxt-link-DZ12xbRX.mjs';
import { getCurrentInstance, inject, ref, computed, watch, onBeforeUnmount, h, nextTick, onMounted, withDirectives, provide, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { Q as QResizeObserver, _ as __nuxt_component_0 } from '../_/QLayout.mjs';
import { g as createComponent, m as layoutKey, h as emptyRenderFn, t as client, w as position, k as stopAndPrevent, H as History, x as listenOpts, y as getEventPath, n as createDirective, p as pageContainerKey } from './server.mjs';
import { g as hUniqueSlot, b as hSlot, u as useDarkProps, a as useDark, c as hDir, _ as __nuxt_component_4$1 } from '../_/use-dark.mjs';
import { i as isKeyCode, d as addFocusFn, u as useRouterLinkProps, e as useRouterLink, g as getSSRProps, _ as __nuxt_component_1$1, a as __q_directive_0 } from '../_/focus-manager.mjs';
import { n as useAnchorProps, b as useModelToggleProps, c as useTransitionProps, v as validatePosition, d as validateOffset, e as useModelToggleEmits, f as useTick, u as useTimeout, g as useTransition, h as useScrollTarget, i as useAnchor, j as useModelToggle, k as usePortal, p as parsePosition, m as addClickOutside, r as removeClickOutside, o as closePortalMenus, s as setPosition, _ as __nuxt_component_2$1 } from '../_/position-engine.mjs';
import { s as scrollTargetProp, g as getScrollTarget, c as childHasFocus, a as getHorizontalScrollPosition, b as getVerticalScrollPosition, h as hasScrollbar } from '../_/scroll.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const __nuxt_component_1 = createComponent({
  name: 'QHeader',

  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,

    heightHint: {
      type: [ String, Number ],
      default: 50
    }
  },

  emits: [ 'reveal', 'focusin' ],

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QHeader needs to be child of QLayout');
      return emptyRenderFn
    }

    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);

    const fixed = computed(() =>
      props.reveal === true
      || $layout.view.value.indexOf('H') !== -1
      || ($q.platform.is.ios && $layout.isContainer.value === true)
    );

    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0
      }
      const offset = size.value - $layout.scroll.value.position;
      return offset > 0 ? offset : 0
    });

    const hidden = computed(() => props.modelValue !== true
      || (fixed.value === true && revealed.value !== true)
    );

    const revealOnFocus = computed(() =>
      props.modelValue === true && hidden.value === true && props.reveal === true
    );

    const classes = computed(() =>
      'q-header q-layout__section--marginal '
      + (fixed.value === true ? 'fixed' : 'absolute') + '-top'
      + (props.bordered === true ? ' q-header--bordered' : '')
      + (hidden.value === true ? ' q-header--hidden' : '')
      + (props.modelValue !== true ? ' q-layout--prevent-focus' : '')
    );

    const style = computed(() => {
      const
        view = $layout.rows.value.top,
        css = {};

      if (view[ 0 ] === 'l' && $layout.left.space === true) {
        css[ $q.lang.rtl === true ? 'right' : 'left' ] = `${ $layout.left.size }px`;
      }
      if (view[ 2 ] === 'r' && $layout.right.space === true) {
        css[ $q.lang.rtl === true ? 'left' : 'right' ] = `${ $layout.right.size }px`;
      }

      return css
    });

    function updateLayout (prop, val) {
      $layout.update('header', prop, val);
    }

    function updateLocal (prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }

    function onResize ({ height }) {
      updateLocal(size, height);
      updateLayout('size', height);
    }

    function onFocusin (evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }

      emit('focusin', evt);
    }

    watch(() => props.modelValue, val => {
      updateLayout('space', val);
      updateLocal(revealed, true);
      $layout.animate();
    });

    watch(offset, val => {
      updateLayout('offset', val);
    });

    watch(() => props.reveal, val => {
      val === false && updateLocal(revealed, props.modelValue);
    });

    watch(revealed, val => {
      $layout.animate();
      emit('reveal', val);
    });

    watch($layout.scroll, scroll => {
      props.reveal === true && updateLocal(revealed,
        scroll.direction === 'up'
        || scroll.position <= props.revealOffset
        || scroll.position - scroll.inflectionPoint < 100
      );
    });

    const instance = {};

    $layout.instances.header = instance;
    props.modelValue === true && updateLayout('size', size.value);
    updateLayout('space', props.modelValue);
    updateLayout('offset', offset.value);

    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout('size', 0);
        updateLayout('offset', 0);
        updateLayout('space', false);
      }
    });

    return () => {
      const child = hUniqueSlot(slots.default, []);

      props.elevated === true && child.push(
        h('div', {
          class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
        })
      );

      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );

      return h('header', {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child)
    }
  }
});

const __nuxt_component_2 = createComponent({
  name: 'QToolbar',

  props: {
    inset: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar row no-wrap items-center'
      + (props.inset === true ? ' q-toolbar--inset' : '')
    );

    return () => h('div', { class: classes.value, role: 'toolbar' }, hSlot(slots.default))
  }
});

const __nuxt_component_4 = createComponent({
  name: 'QToolbarTitle',

  props: {
    shrink: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar__title ellipsis'
      + (props.shrink === true ? ' col-shrink' : '')
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

const handlers$1 = [];
let escDown;

function onKeydown (evt) {
  escDown = evt.keyCode === 27;
}

function onBlur () {
  if (escDown === true) {
    escDown = false;
  }
}

function onKeyup (evt) {
  if (escDown === true) {
    escDown = false;

    if (isKeyCode(evt, 27) === true) {
      handlers$1[ handlers$1.length - 1 ](evt);
    }
  }
}

function update (action) {
  window[ action ]('keydown', onKeydown);
  window[ action ]('blur', onBlur);
  window[ action ]('keyup', onKeyup);
  escDown = false;
}

function addEscapeKey (fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);

    if (handlers$1.length === 1) {
      update('addEventListener');
    }
  }
}

function removeEscapeKey (fn) {
  const index = handlers$1.indexOf(fn);
  if (index !== -1) {
    handlers$1.splice(index, 1);

    if (handlers$1.length === 0) {
      update('removeEventListener');
    }
  }
}

const handlers = [];

function trigger (e) {
  handlers[ handlers.length - 1 ](e);
}

function addFocusout (fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);

    if (handlers.length === 1) {
      document.body.addEventListener('focusin', trigger);
    }
  }
}

function removeFocusout (fn) {
  const index = handlers.indexOf(fn);
  if (index !== -1) {
    handlers.splice(index, 1);

    if (handlers.length === 0) {
      document.body.removeEventListener('focusin', trigger);
    }
  }
}

const __nuxt_component_5 = createComponent({
  name: 'QMenu',

  inheritAttrs: false,

  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,

    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,

    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,

    fit: Boolean,
    cover: Boolean,

    square: Boolean,

    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },

    scrollTarget: scrollTargetProp,

    touchPosition: Boolean,

    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },

  emits: [
    ...useModelToggleEmits,
    'click', 'escapeKey'
  ],

  setup (props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;

    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;

    const innerRef = ref(null);
    const showing = ref(false);

    const hideOnRouteChange = computed(() =>
      props.persistent !== true
      && props.noRouteDismiss !== true
    );

    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);

    const { anchorEl, canShow } = useAnchor({ showing });

    const { hide } = useModelToggle({
      showing, canShow, handleShow, handleHide,
      hideOnRouteChange,
      processOnMount: true
    });

    const { showPortal, hidePortal, renderPortal } = usePortal();

    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside (e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);

          if (
            // always prevent touch event
            e.type === 'touchstart'
            // prevent click if it's on a dialog backdrop
            || e.target.classList.contains('q-dialog__backdrop')
          ) {
            stopAndPrevent(e);
          }

          return true
        }
      }
    };

    const anchorOrigin = computed(() =>
      parsePosition(
        props.anchor || (
          props.cover === true ? 'center middle' : 'bottom start'
        ),
        $q.lang.rtl
      )
    );

    const selfOrigin = computed(() => (
      props.cover === true
        ? anchorOrigin.value
        : parsePosition(props.self || 'top start', $q.lang.rtl)
    ));

    computed(() =>
      (props.square === true ? ' q-menu--square' : '')
      + (isDark.value === true ? ' q-menu--dark q-dark' : '')
    );

    computed(() => (
      props.autoClose === true
        ? { onClick: onAutoClose }
        : {}
    ));

    const handlesFocus = computed(() =>
      showing.value === true && props.persistent !== true
    );

    watch(handlesFocus, val => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      }
      else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });

    function focus () {
      addFocusFn(() => {
        let node = innerRef.value;

        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector('[autofocus][tabindex], [data-autofocus][tabindex]')
            || node.querySelector('[autofocus] [tabindex], [data-autofocus] [tabindex]')
            || node.querySelector('[autofocus], [data-autofocus]')
            || node;
          node.focus({ preventScroll: true });
        }
      });
    }

    function handleShow (evt) {
      refocusTarget = props.noRefocus === false
        ? document.activeElement
        : null;

      addFocusout(onFocusout);

      showPortal();
      configureScrollTarget();

      absoluteOffset = void 0;

      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);

        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }

      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + '|' + $q.screen.height + '|' + props.self + '|' + props.anchor + '|' + $q.lang.rtl,
          updatePosition
        );
      }

      if (props.noFocus !== true) {
        document.activeElement.blur();
      }

      // should removeTick() if this gets removed
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });

      // should removeTimeout() if this gets removed
      registerTimeout(() => {
        // required in order to avoid the "double-tap needed" issue
        if ($q.platform.is.ios === true) {
          // if auto-close, then this click should
          // not close the menu
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }

        updatePosition();
        showPortal(true); // done showing portal
        emit('show', evt);
      }, props.transitionDuration);
    }

    function handleHide (evt) {
      removeTick();
      hidePortal();

      anchorCleanup(true);

      if (
        refocusTarget !== null
        && (
          // menu was hidden from code or ESC plugin
          evt === void 0
          // menu was not closed from a mouse or touch clickOutside
          || evt.qClickOutside !== true
        )
      ) {
        ((evt && evt.type.indexOf('key') === 0
          ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])')
          : void 0
        ) || refocusTarget).focus();
        refocusTarget = null;
      }

      // should removeTimeout() if this gets removed
      registerTimeout(() => {
        hidePortal(true); // done hiding, now destroy
        emit('hide', evt);
      }, props.transitionDuration);
    }

    function anchorCleanup (hiding) {
      absoluteOffset = void 0;

      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }

      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }

      if (hiding !== true) {
        refocusTarget = null;
      }
    }

    function configureScrollTarget () {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }

    function onAutoClose (e) {
      // if auto-close, then the ios double-tap fix which
      // issues a click should not close the menu
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit('click', e);
      }
      else {
        avoidAutoClose = false;
      }
    }

    function onFocusout (evt) {
      // the focus is not in a vue child component
      if (
        handlesFocus.value === true
        && props.noFocus !== true
        && childHasFocus(innerRef.value, evt.target) !== true
      ) {
        focus();
      }
    }

    function onEscapeKey (evt) {
      emit('escapeKey');
      hide(evt);
    }

    function updatePosition () {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }

    onBeforeUnmount(anchorCleanup);

    // expose public methods
    Object.assign(proxy, { focus, updatePosition });

    return renderPortal
  }
});

const __nuxt_component_6 = createComponent({
  name: 'QList',

  props: {
    ...useDarkProps,

    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,

    tag: {
      type: String,
      default: 'div'
    }
  },

  setup (props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);

    const classes = computed(() =>
      'q-list'
      + (props.bordered === true ? ' q-list--bordered' : '')
      + (props.dense === true ? ' q-list--dense' : '')
      + (props.separator === true ? ' q-list--separator' : '')
      + (isDark.value === true ? ' q-list--dark' : '')
      + (props.padding === true ? ' q-list--padding' : '')
    );

    return () => h(props.tag, { class: classes.value }, hSlot(slots.default))
  }
});

const __nuxt_component_7 = createComponent({
  name: 'QItem',

  props: {
    ...useDarkProps,
    ...useRouterLinkProps,

    tag: {
      type: String,
      default: 'div'
    },

    active: {
      type: Boolean,
      default: null
    },

    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,

    tabindex: [ String, Number ],

    focused: Boolean,
    manualFocus: Boolean
  },

  emits: [ 'click', 'keyup' ],

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();

    const rootRef = ref(null);
    const blurTargetRef = ref(null);

    const isActionable = computed(() =>
      props.clickable === true
        || hasLink.value === true
        || props.tag === 'label'
    );

    const isClickable = computed(() =>
      props.disable !== true && isActionable.value === true
    );

    const classes = computed(() =>
      'q-item q-item-type row no-wrap'
      + (props.dense === true ? ' q-item--dense' : '')
      + (isDark.value === true ? ' q-item--dark' : '')
      + (
        hasLink.value === true && props.active === null
          ? linkClass.value
          : (
              props.active === true
                ? ` q-item--active${ props.activeClass !== void 0 ? ` ${ props.activeClass }` : '' }`
                : ''
            )
      )
      + (props.disable === true ? ' disabled' : '')
      + (
        isClickable.value === true
          ? ' q-item--clickable q-link cursor-pointer '
            + (props.manualFocus === true ? 'q-manual-focusable' : 'q-focusable q-hoverable')
            + (props.focused === true ? ' q-manual-focusable--focused' : '')
          : ''
      )
    );

    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null
      }

      const dir = $q.lang.rtl === true ? 'Right' : 'Left';
      return {
        [ 'padding' + dir ]: (16 + props.insetLevel * 56) + 'px'
      }
    });

    function onClick (e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          }
          else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }

        navigateOnClick(e);
      }
    }

    function onKeyup (e) {
      if (isClickable.value === true && isKeyCode(e, [ 13, 32 ]) === true) {
        stopAndPrevent(e);

        // for ripple
        e.qKeyEvent = true;

        // for click trigger
        const evt = new MouseEvent('click', e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }

      emit('keyup', e);
    }

    function getContent () {
      const child = hUniqueSlot(slots.default, []);

      isClickable.value === true && child.unshift(
        h('div', { class: 'q-focus-helper', tabindex: -1, ref: blurTargetRef })
      );

      return child
    }

    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: 'listitem',
        onClick,
        onKeyup
      };

      if (isClickable.value === true) {
        data.tabindex = props.tabindex || '0';
        Object.assign(data, linkAttrs.value);
      }
      else if (isActionable.value === true) {
        data[ 'aria-disabled' ] = 'true';
      }

      return h(
        linkTag.value,
        data,
        getContent()
      )
    }
  }
});

function useHistory (showing, hide, hideOnRouteChange) {
  let historyEntry;

  function removeFromHistory () {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }

  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });

  return {
    removeFromHistory,

    addToHistory () {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };

      History.add(historyEntry);
    }
  }
}

let
  registered = 0,
  scrollPositionX,
  scrollPositionY,
  maxScrollTop,
  vpPendingUpdate = false,
  bodyLeft,
  bodyTop,
  href,
  closeTimer = null;

function onWheel (e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}

function shouldPreventScroll (e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) {
    return true
  }

  const
    path = getEventPath(e),
    shift = e.shiftKey && !e.deltaX,
    scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    delta = shift || scrollY ? e.deltaY : e.deltaX;

  for (let index = 0; index < path.length; index++) {
    const el = path[ index ];

    if (hasScrollbar(el, scrollY)) {
      return scrollY
        ? (
            delta < 0 && el.scrollTop === 0
              ? true
              : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight
          )
        : (
            delta < 0 && el.scrollLeft === 0
              ? true
              : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth
          )
    }
  }

  return true
}

function onAppleScroll (e) {
  if (e.target === document) {
    // required, otherwise iOS blocks further scrolling
    // until the mobile scrollbar dissappears
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop; // eslint-disable-line
  }
}

function onAppleResize (evt) {
  if (vpPendingUpdate === true) {
    return
  }

  vpPendingUpdate = true;

  requestAnimationFrame(() => {
    vpPendingUpdate = false;

    const
      { height } = evt.target,
      { clientHeight, scrollTop } = document.scrollingElement;

    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }

    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}

function apply (action) {
  const
    body = document.body,
    hasViewport = window.visualViewport !== void 0;

  if (action === 'add') {
    const { overflowY, overflowX } = window.getComputedStyle(body);

    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;

    href = window.location.href;

    body.style.left = `-${ scrollPositionX }px`;
    body.style.top = `-${ scrollPositionY }px`;

    if (overflowX !== 'hidden' && (overflowX === 'scroll' || body.scrollWidth > window.innerWidth)) {
      body.classList.add('q-body--force-scrollbar-x');
    }
    if (overflowY !== 'hidden' && (overflowY === 'scroll' || body.scrollHeight > window.innerHeight)) {
      body.classList.add('q-body--force-scrollbar-y');
    }

    body.classList.add('q-body--prevent-scroll');
    document.qScrollPrevented = true;

    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener('resize', onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener('scroll', onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      }
      else {
        window.addEventListener('scroll', onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }

  if (client.is.desktop === true && client.is.mac === true) {
    // ref. https://developers.google.com/web/updates/2017/01/scrolling-intervention
    window[ `${ action }EventListener` ]('wheel', onWheel, listenOpts.notPassive);
  }

  if (action === 'remove') {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener('resize', onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener('scroll', onAppleResize, listenOpts.passiveCapture);
      }
      else {
        window.removeEventListener('scroll', onAppleScroll, listenOpts.passiveCapture);
      }
    }

    body.classList.remove('q-body--prevent-scroll');
    body.classList.remove('q-body--force-scrollbar-x');
    body.classList.remove('q-body--force-scrollbar-y');

    document.qScrollPrevented = false;

    body.style.left = bodyLeft;
    body.style.top = bodyTop;

    // scroll back only if route has not changed
    if (window.location.href === href) {
      window.scrollTo(scrollPositionX, scrollPositionY);
    }

    maxScrollTop = void 0;
  }
}

function preventScroll (state) {
  let action = 'add';

  if (state === true) {
    registered++;

    if (closeTimer !== null) {
      clearTimeout(closeTimer);
      closeTimer = null;
      return
    }

    if (registered > 1) {
      return
    }
  }
  else {
    if (registered === 0) {
      return
    }

    registered--;

    if (registered > 0) {
      return
    }

    action = 'remove';

    if (client.is.ios === true && client.is.nativeMobile === true) {
      closeTimer !== null && clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = null;
      }, 100);
      return
    }
  }

  apply(action);
}

function usePreventScroll () {
  let currentState;

  return {
    preventBodyScroll (state) {
      if (
        state !== currentState
        && (currentState !== void 0 || state === true)
      ) {
        currentState = state;
        preventScroll(state);
      }
    }
  }
}

const TouchPan = createDirective({ name: 'touch-pan', getSSRProps }
  
);

function between (v, min, max) {
  return max <= min
    ? min
    : Math.min(max, Math.max(min, v))
}

const duration = 150;

const __nuxt_component_10 = createComponent({
  name: 'QDrawer',

  inheritAttrs: false,

  props: {
    ...useModelToggleProps,
    ...useDarkProps,

    side: {
      type: String,
      default: 'left',
      validator: v => [ 'left', 'right' ].includes(v)
    },

    width: {
      type: Number,
      default: 300
    },

    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,

    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,

    behavior: {
      type: String,
      validator: v => [ 'default', 'desktop', 'mobile' ].includes(v),
      default: 'default'
    },

    bordered: Boolean,
    elevated: Boolean,

    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },

  emits: [
    ...useModelToggleEmits,
    'onLayout', 'miniState'
  ],

  setup (props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;

    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QDrawer needs to be child of QLayout');
      return emptyRenderFn
    }

    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;

    const belowBreakpoint = ref(
      props.behavior === 'mobile'
      || (props.behavior !== 'desktop' && $layout.totalWidth.value <= props.breakpoint)
    );

    const isMini = computed(() =>
      props.mini === true && belowBreakpoint.value !== true
    );

    const size = computed(() => (
      isMini.value === true
        ? props.miniWidth
        : props.width
    ));

    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false
        ? true
        : props.modelValue === true
    );

    const hideOnRouteChange = computed(() =>
      props.persistent !== true
      && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );

    function handleShow (evt, noEvent) {
      addToHistory();

      evt !== false && $layout.animate();
      applyPosition(0);

      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[ otherSide.value ];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }

        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      }
      else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }

      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit('show', evt);
      }, duration);
    }

    function handleHide (evt, noEvent) {
      removeFromHistory();

      evt !== false && $layout.animate();

      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);

      cleanup();

      if (noEvent !== true) {
        registerTimeout(() => { emit('hide', evt); }, duration);
      }
      else {
        removeTimeout();
      }
    }

    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });

    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);

    const instance = {
      belowBreakpoint,
      hide
    };

    const rightSide = computed(() => props.side === 'right');

    const stateDirection = computed(() =>
      ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );

    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref( // starting with "hidden" for SSR
      size.value * stateDirection.value
    );

    const otherSide = computed(() => (rightSide.value === true ? 'left' : 'right'));
    const offset = computed(() => (
      showing.value === true && belowBreakpoint.value === false && props.overlay === false
        ? (props.miniToOverlay === true ? props.miniWidth : size.value)
        : 0
    ));

    const fixed = computed(() =>
      props.overlay === true
      || props.miniToOverlay === true
      || $layout.view.value.indexOf(rightSide.value ? 'R' : 'L') !== -1
      || ($q.platform.is.ios === true && $layout.isContainer.value === true)
    );

    const onLayout = computed(() =>
      props.overlay === false
      && showing.value === true
      && belowBreakpoint.value === false
    );

    const onScreenOverlay = computed(() =>
      props.overlay === true
      && showing.value === true
      && belowBreakpoint.value === false
    );

    const backdropClass = computed(() =>
      'fullscreen q-drawer__backdrop'
      + (showing.value === false && flagPanning.value === false ? ' hidden' : '')
    );

    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${ flagBackdropBg.value * 0.4 })`
    }));

    const headerSlot = computed(() => (
      rightSide.value === true
        ? $layout.rows.value.top[ 2 ] === 'r'
        : $layout.rows.value.top[ 0 ] === 'l'
    ));

    const footerSlot = computed(() => (
      rightSide.value === true
        ? $layout.rows.value.bottom[ 2 ] === 'r'
        : $layout.rows.value.bottom[ 0 ] === 'l'
    ));

    const aboveStyle = computed(() => {
      const css = {};

      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${ $layout.header.offset }px`;
        }
        else if ($layout.header.space === true) {
          css.top = `${ $layout.header.size }px`;
        }
      }

      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${ $layout.footer.offset }px`;
        }
        else if ($layout.footer.space === true) {
          css.bottom = `${ $layout.footer.size }px`;
        }
      }

      return css
    });

    const style = computed(() => {
      const style = {
        width: `${ size.value }px`,
        transform: `translateX(${ flagContentPosition.value }px)`
      };

      return belowBreakpoint.value === true
        ? style
        : Object.assign(style, aboveStyle.value)
    });

    const contentClass = computed(() =>
      'q-drawer__content fit '
      + ($layout.isContainer.value !== true ? 'scroll' : 'overflow-auto')
    );

    const classes = computed(() =>
      `q-drawer q-drawer--${ props.side }`
      + (flagMiniAnimate.value === true ? ' q-drawer--mini-animate' : '')
      + (props.bordered === true ? ' q-drawer--bordered' : '')
      + (isDark.value === true ? ' q-drawer--dark q-dark' : '')
      + (
        flagPanning.value === true
          ? ' no-transition'
          : (showing.value === true ? '' : ' q-layout--prevent-focus')
      )
      + (
        belowBreakpoint.value === true
          ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding'
          : ` q-drawer--${ isMini.value === true ? 'mini' : 'standard' }`
          + (fixed.value === true || onLayout.value !== true ? ' fixed' : '')
          + (props.overlay === true || props.miniToOverlay === true ? ' q-drawer--on-top' : '')
          + (headerSlot.value === true ? ' q-drawer--top-padding' : '')
      )
    );

    const openDirective = computed(() => {
      // if props.noSwipeOpen !== true
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;

      return [ [
        TouchPan,
        onOpenPan,
        void 0,
        {
          [ dir ]: true,
          mouse: true
        }
      ] ]
    });

    const contentCloseDirective = computed(() => {
      // if belowBreakpoint.value === true && props.noSwipeClose !== true
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;

      return [ [
        TouchPan,
        onClosePan,
        void 0,
        {
          [ dir ]: true,
          mouse: true
        }
      ] ]
    });

    const backdropCloseDirective = computed(() => {
      // if showing.value === true && props.noSwipeBackdrop !== true
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;

      return [ [
        TouchPan,
        onClosePan,
        void 0,
        {
          [ dir ]: true,
          mouse: true,
          mouseAllDir: true
        }
      ] ]
    });

    function updateBelowBreakpoint () {
      updateLocal(belowBreakpoint, (
        props.behavior === 'mobile'
        || (props.behavior !== 'desktop' && $layout.totalWidth.value <= props.breakpoint)
      ));
    }

    watch(belowBreakpoint, val => {
      if (val === true) { // from lg to xs
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      }
      else if (
        props.overlay === false
        && props.behavior !== 'mobile'
        && lastDesktopState !== false
      ) { // from xs to lg
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        }
        else {
          show(false);
        }
      }
    });

    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[ oldSide ] === instance) {
        $layout.instances[ oldSide ] = void 0;
        $layout[ oldSide ].space = false;
        $layout[ oldSide ].offset = 0;
      }

      $layout.instances[ newSide ] = instance;
      $layout[ newSide ].size = size.value;
      $layout[ newSide ].space = onLayout.value;
      $layout[ newSide ].offset = offset.value;
    });

    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });

    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );

    watch($layout.isContainer, val => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });

    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });

    watch(offset, val => { updateLayout('offset', val); });

    watch(onLayout, val => {
      emit('onLayout', val);
      updateLayout('space', val);
    });

    watch(rightSide, () => { applyPosition(); });

    watch(size, val => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });

    watch(() => props.miniToOverlay, val => {
      updateSizeOnLayout(val, size.value);
    });

    watch(() => $q.lang.rtl, () => { applyPosition(); });

    watch(() => props.mini, () => {
      if (props.noMiniAnimation) return
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });

    watch(isMini, val => { emit('miniState', val); });

    function applyPosition (position) {
      if (position === void 0) {
        nextTick(() => {
          position = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position);
        });
      }
      else {
        if (
          $layout.isContainer.value === true
          && rightSide.value === true
          && (belowBreakpoint.value === true || Math.abs(position) === size.value)
        ) {
          position += stateDirection.value * $layout.scrollbarWidth.value;
        }

        flagContentPosition.value = position;
      }
    }

    function applyBackdrop (x) {
      flagBackdropBg.value = x;
    }

    function setScrollable (v) {
      const action = v === true
        ? 'remove'
        : ($layout.isContainer.value !== true ? 'add' : '');

      action !== '' && document.body.classList[ action ]('q-body--drawer-toggle');
    }

    function animateMini () {
      timerMini !== null && clearTimeout(timerMini);

      if (vm.proxy && vm.proxy.$el) {
        // need to speed it up and apply it immediately,
        // even faster than Vue's nextTick!
        vm.proxy.$el.classList.add('q-drawer--mini-animate');
      }

      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        if (vm && vm.proxy && vm.proxy.$el) {
          vm.proxy.$el.classList.remove('q-drawer--mini-animate');
        }
      }, 150);
    }

    function onOpenPan (evt) {
      if (showing.value !== false) {
        // some browsers might capture and trigger this
        // even if Drawer has just been opened (but animation is still pending)
        return
      }

      const
        width = size.value,
        position = between(evt.distance.x, 0, width);

      if (evt.isFinal === true) {
        const opened = position >= Math.min(75, width);

        if (opened === true) {
          show();
        }
        else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }

        flagPanning.value = false;
        return
      }

      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value)
          ? Math.max(width - position, 0)
          : Math.min(0, position - width)
      );
      applyBackdrop(
        between(position / width, 0, 1)
      );

      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }

    function onClosePan (evt) {
      if (showing.value !== true) {
        // some browsers might capture and trigger this
        // even if Drawer has just been closed (but animation is still pending)
        return
      }

      const
        width = size.value,
        dir = evt.direction === props.side,
        position = ($q.lang.rtl === true ? dir !== true : dir)
          ? between(evt.distance.x, 0, width)
          : 0;

      if (evt.isFinal === true) {
        const opened = Math.abs(position) < Math.min(75, width);

        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        }
        else {
          hide();
        }

        flagPanning.value = false;
        return
      }

      applyPosition(stateDirection.value * position);
      applyBackdrop(between(1 - position / width, 0, 1));

      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }

    function cleanup () {
      preventBodyScroll(false);
      setScrollable(true);
    }

    function updateLayout (prop, val) {
      $layout.update(props.side, prop, val);
    }

    function updateLocal (prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }

    function updateSizeOnLayout (miniToOverlay, size) {
      updateLayout('size', miniToOverlay === true ? props.miniWidth : size);
    }

    $layout.instances[ props.side ] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout('space', onLayout.value);
    updateLayout('offset', offset.value);

    if (
      props.showIfAbove === true
      && props.modelValue !== true
      && showing.value === true
      && props[ 'onUpdate:modelValue' ] !== void 0
    ) {
      emit('update:modelValue', true);
    }

    onMounted(() => {
      emit('onLayout', onLayout.value);
      emit('miniState', isMini.value);

      lastDesktopState = props.showIfAbove === true;

      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };

      if ($layout.totalWidth.value !== 0) {
        // make sure that all computed properties
        // have been updated before calling handleShow/handleHide()
        nextTick(fn);
        return
      }

      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;

        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        }
        else {
          fn();
        }
      });
    });

    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();

      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }

      showing.value === true && cleanup();

      if ($layout.instances[ props.side ] === instance) {
        $layout.instances[ props.side ] = void 0;
        updateLayout('size', 0);
        updateLayout('offset', 0);
        updateLayout('space', false);
      }
    });

    return () => {
      const child = [];

      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h('div', {
              key: 'open',
              class: `q-drawer__opener fixed-${ props.side }`,
              'aria-hidden': 'true'
            }),
            openDirective.value
          )
        );

        child.push(
          hDir(
            'div',
            {
              ref: 'backdrop',
              class: backdropClass.value,
              style: backdropStyle.value,
              'aria-hidden': 'true',
              onClick: hide
            },
            void 0,
            'backdrop',
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }

      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h('div', {
          ...attrs,
          key: '' + mini, // required otherwise Vue will not diff correctly
          class: [
            contentClass.value,
            attrs.class
          ]
        }, mini === true
          ? slots.mini()
          : hSlot(slots.default)
        )
      ];

      if (props.elevated === true && showing.value === true) {
        content.push(
          h('div', {
            class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
          })
        );
      }

      child.push(
        hDir(
          'aside',
          { ref: 'content', class: classes.value, style: style.value },
          content,
          'contentclose',
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );

      return h('div', { class: 'q-drawer-container' }, child)
    }
  }
});

const __nuxt_component_12 = createComponent({
  name: 'QPageContainer',

  setup (_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QPageContainer needs to be child of QLayout');
      return emptyRenderFn
    }

    provide(pageContainerKey, true);

    const style = computed(() => {
      const css = {};

      if ($layout.header.space === true) {
        css.paddingTop = `${ $layout.header.size }px`;
      }
      if ($layout.right.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Left' : 'Right' }` ] = `${ $layout.right.size }px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${ $layout.footer.size }px`;
      }
      if ($layout.left.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Right' : 'Left' }` ] = `${ $layout.left.size }px`;
      }

      return css
    });

    return () => h('div', {
      class: 'q-page-container',
      style: style.value
    }, hSlot(slots.default))
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const drawerOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_layout = __nuxt_component_0;
      const _component_q_header = __nuxt_component_1;
      const _component_q_toolbar = __nuxt_component_2;
      const _component_q_btn = __nuxt_component_1$1;
      const _component_q_toolbar_title = __nuxt_component_4;
      const _component_q_menu = __nuxt_component_5;
      const _component_q_list = __nuxt_component_6;
      const _component_q_item = __nuxt_component_7;
      const _component_q_item_section = __nuxt_component_2$1;
      const _component_q_icon = __nuxt_component_4$1;
      const _component_q_drawer = __nuxt_component_10;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_q_page_container = __nuxt_component_12;
      const _directive_ripple = __q_directive_0;
      _push(ssrRenderComponent(_component_q_layout, mergeProps({ view: "lHh Lpr lFf" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_header, { elevated: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_toolbar, { class: "bg-primary text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "menu",
                          onClick: ($event) => drawerOpen.value = !drawerOpen.value,
                          class: "q-mr-sm"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_toolbar_title, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Turn App`);
                            } else {
                              return [
                                createTextVNode("Turn App")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "notifications"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "person"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_menu, { style: { "width": "180px", "max-width": "180px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_q_list, { style: { "width": "100%" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_q_item, mergeProps({ clickable: "" }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_q_icon, {
                                                        name: "person",
                                                        size: "xs",
                                                        class: "text-primary"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_q_icon, {
                                                          name: "person",
                                                          size: "xs",
                                                          class: "text-primary"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_q_item_section, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Perfil`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Perfil")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_q_item_section, { avatar: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_q_icon, {
                                                        name: "person",
                                                        size: "xs",
                                                        class: "text-primary"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_q_item_section, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Perfil")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_q_item, mergeProps({ clickable: "" }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_q_icon, {
                                                        name: "login",
                                                        size: "xs",
                                                        class: "text-primary"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_q_icon, {
                                                          name: "login",
                                                          size: "xs",
                                                          class: "text-primary"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_q_item_section, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Cerrar Sesion`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Cerrar Sesion")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_q_item_section, { avatar: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_q_icon, {
                                                        name: "login",
                                                        size: "xs",
                                                        class: "text-primary"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_q_item_section, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Cerrar Sesion")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_q_item_section, { avatar: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_q_icon, {
                                                      name: "person",
                                                      size: "xs",
                                                      class: "text-primary"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_q_item_section, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Perfil")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })), [
                                              [_directive_ripple]
                                            ]),
                                            withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_q_item_section, { avatar: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_q_icon, {
                                                      name: "login",
                                                      size: "xs",
                                                      class: "text-primary"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_q_item_section, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Cerrar Sesion")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })), [
                                              [_directive_ripple]
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_q_list, { style: { "width": "100%" } }, {
                                        default: withCtx(() => [
                                          withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_q_item_section, { avatar: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_q_icon, {
                                                    name: "person",
                                                    size: "xs",
                                                    class: "text-primary"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_q_item_section, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Perfil")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })), [
                                            [_directive_ripple]
                                          ]),
                                          withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_q_item_section, { avatar: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_q_icon, {
                                                    name: "login",
                                                    size: "xs",
                                                    class: "text-primary"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_q_item_section, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Cerrar Sesion")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })), [
                                            [_directive_ripple]
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_menu, { style: { "width": "180px", "max-width": "180px" } }, {
                                  default: withCtx(() => [
                                    createVNode(_component_q_list, { style: { "width": "100%" } }, {
                                      default: withCtx(() => [
                                        withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_q_item_section, { avatar: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_q_icon, {
                                                  name: "person",
                                                  size: "xs",
                                                  class: "text-primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_q_item_section, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Perfil")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })), [
                                          [_directive_ripple]
                                        ]),
                                        withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_q_item_section, { avatar: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_q_icon, {
                                                  name: "login",
                                                  size: "xs",
                                                  class: "text-primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_q_item_section, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Cerrar Sesion")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })), [
                                          [_directive_ripple]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_btn, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "menu",
                            onClick: ($event) => drawerOpen.value = !drawerOpen.value,
                            class: "q-mr-sm"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_q_toolbar_title, null, {
                            default: withCtx(() => [
                              createTextVNode("Turn App")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_btn, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "notifications"
                          }),
                          createVNode(_component_q_btn, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "person"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_menu, { style: { "width": "180px", "max-width": "180px" } }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_list, { style: { "width": "100%" } }, {
                                    default: withCtx(() => [
                                      withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_q_item_section, { avatar: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_q_icon, {
                                                name: "person",
                                                size: "xs",
                                                class: "text-primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_q_item_section, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Perfil")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })), [
                                        [_directive_ripple]
                                      ]),
                                      withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_q_item_section, { avatar: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_q_icon, {
                                                name: "login",
                                                size: "xs",
                                                class: "text-primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_q_item_section, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Cerrar Sesion")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })), [
                                        [_directive_ripple]
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_toolbar, { class: "bg-primary text-white" }, {
                      default: withCtx(() => [
                        createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "menu",
                          onClick: ($event) => drawerOpen.value = !drawerOpen.value,
                          class: "q-mr-sm"
                        }, null, 8, ["onClick"]),
                        createVNode(_component_q_toolbar_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Turn App")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "notifications"
                        }),
                        createVNode(_component_q_btn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "person"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_menu, { style: { "width": "180px", "max-width": "180px" } }, {
                              default: withCtx(() => [
                                createVNode(_component_q_list, { style: { "width": "100%" } }, {
                                  default: withCtx(() => [
                                    withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_q_item_section, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_q_icon, {
                                              name: "person",
                                              size: "xs",
                                              class: "text-primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_q_item_section, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Perfil")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })), [
                                      [_directive_ripple]
                                    ]),
                                    withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_q_item_section, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_q_icon, {
                                              name: "login",
                                              size: "xs",
                                              class: "text-primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_q_item_section, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Cerrar Sesion")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })), [
                                      [_directive_ripple]
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_drawer, {
              modelValue: drawerOpen.value,
              "onUpdate:modelValue": ($event) => drawerOpen.value = $event,
              "show-if-above": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="q-ma-md"${_scopeId2}>Men\xFA</h6>`);
                  _push3(ssrRenderComponent(_component_q_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_item, mergeProps({ clickable: "" }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_q_icon, {
                                      name: "login",
                                      class: "text-primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_q_icon, {
                                        name: "login",
                                        class: "text-primary"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_q_item_section, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      href: "/access/login",
                                      class: "q-ml-md no-decoration text-grey-10"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Login`);
                                        } else {
                                          return [
                                            createTextVNode("Login")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NuxtLink, {
                                        href: "/access/login",
                                        class: "q-ml-md no-decoration text-grey-10"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Login")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_q_item_section, { avatar: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_q_icon, {
                                      name: "login",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_item_section, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      href: "/access/login",
                                      class: "q-ml-md no-decoration text-grey-10"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Login")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_item_section, { avatar: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_icon, {
                                    name: "login",
                                    class: "text-primary"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_item_section, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    href: "/access/login",
                                    class: "q-ml-md no-decoration text-grey-10"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Login")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })), [
                            [_directive_ripple]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h6", { class: "q-ma-md" }, "Men\xFA"),
                    createVNode(_component_q_list, null, {
                      default: withCtx(() => [
                        withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_q_item_section, { avatar: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_q_icon, {
                                  name: "login",
                                  class: "text-primary"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_item_section, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  href: "/access/login",
                                  class: "q-ml-md no-decoration text-grey-10"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Login")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [_directive_ripple]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_page_container, { style: { "background-color": "rgb(223 221 205 / 25%)", "min-height": "100vh" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_header, { elevated: "" }, {
                default: withCtx(() => [
                  createVNode(_component_q_toolbar, { class: "bg-primary text-white" }, {
                    default: withCtx(() => [
                      createVNode(_component_q_btn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "menu",
                        onClick: ($event) => drawerOpen.value = !drawerOpen.value,
                        class: "q-mr-sm"
                      }, null, 8, ["onClick"]),
                      createVNode(_component_q_toolbar_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Turn App")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_btn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "notifications"
                      }),
                      createVNode(_component_q_btn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "person"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_menu, { style: { "width": "180px", "max-width": "180px" } }, {
                            default: withCtx(() => [
                              createVNode(_component_q_list, { style: { "width": "100%" } }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_q_item_section, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_q_icon, {
                                            name: "person",
                                            size: "xs",
                                            class: "text-primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_q_item_section, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Perfil")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [_directive_ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_q_item_section, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_q_icon, {
                                            name: "login",
                                            size: "xs",
                                            class: "text-primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_q_item_section, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Cerrar Sesion")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [_directive_ripple]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_drawer, {
                modelValue: drawerOpen.value,
                "onUpdate:modelValue": ($event) => drawerOpen.value = $event,
                "show-if-above": ""
              }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "q-ma-md" }, "Men\xFA"),
                  createVNode(_component_q_list, null, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(_component_q_item, { clickable: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_q_item_section, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_q_icon, {
                                name: "login",
                                class: "text-primary"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_item_section, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                href: "/access/login",
                                class: "q-ml-md no-decoration text-grey-10"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Login")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [_directive_ripple]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_q_page_container, { style: { "background-color": "rgb(223 221 205 / 25%)", "min-height": "100vh" } }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DrP5BIZP.mjs.map
