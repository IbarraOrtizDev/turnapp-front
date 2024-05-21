import { computed, ref, getCurrentInstance, h, Transition, watch, onBeforeUnmount, onBeforeMount, onMounted, inject, useSSRContext, defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, withDirectives } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { g as createComponent, i as cleanEvt, j as addEvt, k as stopAndPrevent, H as History, l as isNumber, m as layoutKey, h as emptyRenderFn, p as pageContainerKey, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_0$1$1 } from '../_/QCard.mjs';
import { u as useTimeout, a as useAnchorStaticProps, b as useModelToggleProps, c as useTransitionProps, v as validatePosition, d as validateOffset, e as useModelToggleEmits, p as parsePosition, f as useTick, g as useTransition, h as useScrollTarget, i as useAnchor, j as useModelToggle, k as usePortal, r as removeClickOutside, s as setPosition, l as clearSelection, m as addClickOutside, _ as __nuxt_component_2$1 } from '../_/position-engine.mjs';
import { Q as QSpinner, v as vmIsDestroyed, b as vmHasRouter, _ as __nuxt_component_1$1, a as __q_directive_0 } from '../_/focus-manager.mjs';
import { b as hSlot, h as hMergeSlot, u as useDarkProps, d as useSizeProps, a as useDark, e as useSize, c as hDir, _ as __nuxt_component_4$1 } from '../_/use-dark.mjs';
import { s as scrollTargetProp, g as getScrollTarget } from '../_/scroll.mjs';
import { u as usePanelProps, a as usePanelEmits, b as usePanel, c as usePanelChildProps } from '../_/use-panel.mjs';
import { _ as __nuxt_component_0$2 } from '../_/QInput.mjs';
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

const useRatioProps = {
  ratio: [ String, Number ]
};

function useRatio (props, naturalRatio) {
  // return ratioStyle
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );

    return isNaN(ratio) !== true && ratio > 0
      ? { paddingBottom: `${ 100 / ratio }%` }
      : null
  })
}

const defaultRatio = 1.7778; /* 16/9 */

const __nuxt_component_3 = createComponent({
  name: 'QImg',

  props: {
    ...useRatioProps,

    src: String,
    srcset: String,
    sizes: String,

    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,

    draggable: Boolean,

    loading: {
      type: String,
      default: 'lazy'
    },
    loadingShowDelay: {
      type: [ Number, String ],
      default: 0
    },

    fetchpriority: {
      type: String,
      default: 'auto'
    },
    width: String,
    height: String,
    initialRatio: {
      type: [ Number, String ],
      default: defaultRatio
    },

    placeholderSrc: String,
    errorSrc: String,

    fit: {
      type: String,
      default: 'cover'
    },
    position: {
      type: String,
      default: '50% 50%'
    },

    imgClass: String,
    imgStyle: Object,

    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,

    spinnerColor: String,
    spinnerSize: String
  },

  emits: [ 'load', 'error' ],

  setup (props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();

    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();

    const placeholderImg = computed(() => (
      props.placeholderSrc !== void 0
        ? { src: props.placeholderSrc }
        : null
    ));

    const errorImg = computed(() => (
      props.errorSrc !== void 0
        ? { src: props.errorSrc, __qerror: true }
        : null
    ));

    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];

    const position = ref(0);

    const isLoading = ref(false);
    const hasError = ref(false);

    const classes = computed(() =>
      `q-img q-img--${ props.noNativeMenu === true ? 'no-' : '' }menu`
    );

    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));

    const imgClass = computed(() =>
      `q-img__image ${ props.imgClass !== void 0 ? props.imgClass + ' ' : '' }`
      + `q-img__image--with${ props.noTransition === true ? 'out' : '' }-transition`
      + ' q-img__image--'
    );

    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));

    function clearLoading () {
      removeLoadShowTimeout();
      isLoading.value = false;
    }

    function onLoad ({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();

        naturalRatio.value = target.naturalHeight === 0
          ? 0.5
          : target.naturalWidth / target.naturalHeight;

        waitForCompleteness(target, 1);
      }
    }

    function waitForCompleteness (target, count) {
      // protect against running forever
      if (count === 1000 || vmIsDestroyed(vm) === true) return

      if (target.complete === true) {
        onReady(target);
      }
      else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }

    function onReady (target) {
      if (vmIsDestroyed(vm) === true) return

      position.value = position.value ^ 1;
      images[ position.value ].value = null;

      clearLoading();

      if (target.getAttribute('__qerror') !== 'true') {
        hasError.value = false;
      }

      emit('load', target.currentSrc || target.src);
    }

    function onError (err) {
      removeLoadTimeout();
      clearLoading();

      hasError.value = true;
      images[ position.value ].value = errorImg.value;
      images[ position.value ^ 1 ].value = placeholderImg.value;

      emit('error', err);
    }

    function getImage (index) {
      const img = images[ index ].value;

      const data = {
        key: 'img_' + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        'aria-hidden': 'true',
        draggable: props.draggable,
        ...img
      };

      if (position.value === index) {
        Object.assign(data, {
          class: data.class + 'current',
          onLoad,
          onError
        });
      }
      else {
        data.class += 'loaded';
      }

      return h(
        'div',
        { class: 'q-img__container absolute-full', key: 'img' + index },
        h('img', data)
      )
    }

    function getContent () {
      if (isLoading.value === false) {
        return h('div', {
          key: 'content',
          class: 'q-img__content absolute-full q-anchor--skip'
        }, hSlot(slots[ hasError.value === true ? 'error' : 'default' ]))
      }

      return h('div', {
        key: 'loading',
        class: 'q-img__loading absolute-full flex flex-center'
      }, (
        slots.loading !== void 0
          ? slots.loading()
          : (
              props.noSpinner === true
                ? void 0
                : [
                    h(QSpinner, {
                      color: props.spinnerColor,
                      size: props.spinnerSize
                    })
                  ]
            )
      ))
    }

    return () => {
      const content = [];

      if (ratioStyle.value !== null) {
        content.push(
          h('div', { key: 'filler', style: ratioStyle.value })
        );
      }

      if (images[ 0 ].value !== null) {
        content.push(
          getImage(0)
        );
      }

      if (images[ 1 ].value !== null) {
        content.push(
          getImage(1)
        );
      }

      content.push(
        h(Transition, { name: 'q-transition--fade' }, getContent)
      );

      return h('div', {
        key: 'main',
        class: classes.value,
        style: style.value,
        role: 'img',
        'aria-label': props.alt
      }, content)
    }
  }
});

const __nuxt_component_4 = createComponent({
  name: 'QItemLabel',

  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [ Number, String ]
  },

  setup (props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));

    const classes = computed(() =>
      'q-item__label'
      + (props.overline === true ? ' q-item__label--overline text-overline' : '')
      + (props.caption === true ? ' q-item__label--caption text-caption' : '')
      + (props.header === true ? ' q-item__label--header' : '')
      + (parsedLines.value === 1 ? ' ellipsis' : '')
    );

    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1
        ? {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': parsedLines.value
          }
        : null
    });

    return () => h('div', {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default))
  }
});

const alignValues = [ 'top', 'middle', 'bottom' ];

const __nuxt_component_7 = createComponent({
  name: 'QBadge',

  props: {
    color: String,
    textColor: String,

    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,

    label: [ Number, String ],

    align: {
      type: String,
      validator: v => alignValues.includes(v)
    }
  },

  setup (props, { slots }) {
    const style = computed(() => {
      return props.align !== void 0
        ? { verticalAlign: props.align }
        : null
    });

    const classes = computed(() => {
      const text = props.outline === true
        ? props.color || props.textColor
        : props.textColor;

      return 'q-badge flex inline items-center no-wrap'
        + ` q-badge--${ props.multiLine === true ? 'multi' : 'single' }-line`
        + (props.outline === true
          ? ' q-badge--outline'
          : (props.color !== void 0 ? ` bg-${ props.color }` : '')
        )
        + (text !== void 0 ? ` text-${ text }` : '')
        + (props.floating === true ? ' q-badge--floating' : '')
        + (props.rounded === true ? ' q-badge--rounded' : '')
        + (props.transparent === true ? ' q-badge--transparent' : '')
    });

    return () => h('div', {
      class: classes.value,
      style: style.value,
      role: 'status',
      'aria-label': props.label
    }, hMergeSlot(slots.default, props.label !== void 0 ? [ props.label ] : []))
  }
});

const __nuxt_component_8 = createComponent({
  name: 'QTooltip',

  inheritAttrs: false,

  props: {
    ...useAnchorStaticProps,
    ...useModelToggleProps,
    ...useTransitionProps,

    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },

    transitionShow: {
      ...useTransitionProps.transitionShow,
      default: 'jump-down'
    },
    transitionHide: {
      ...useTransitionProps.transitionHide,
      default: 'jump-up'
    },

    anchor: {
      type: String,
      default: 'bottom middle',
      validator: validatePosition
    },
    self: {
      type: String,
      default: 'top middle',
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [ 14, 14 ],
      validator: validateOffset
    },

    scrollTarget: scrollTargetProp,

    delay: {
      type: Number,
      default: 0
    },

    hideDelay: {
      type: Number,
      default: 0
    },

    persistent: Boolean
  },

  emits: [
    ...useModelToggleEmits
  ],

  setup (props, { slots, emit, attrs }) {
    let unwatchPosition, observer;

    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;

    const innerRef = ref(null);
    const showing = ref(false);

    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);

    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);

    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });

    const { show, hide } = useModelToggle({
      showing, canShow, handleShow, handleHide,
      hideOnRouteChange,
      processOnMount: true
    });

    Object.assign(anchorEvents, { delayShow, delayHide });

    const { showPortal, hidePortal, renderPortal } = usePortal();

    // if we're on mobile, let's improve the experience
    // by closing it when user taps outside of it
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside (e) {
          hide(e);

          // prevent click if it's on a dialog backdrop
          if (e.target.classList.contains('q-dialog__backdrop')) {
            stopAndPrevent(e);
          }

          return true
        }
      };

      const hasClickOutside = computed(() =>
        // it doesn't has external model
        // (null is the default value)
        props.modelValue === null
        // and it's not persistent
        && props.persistent !== true
        && showing.value === true
      );

      watch(hasClickOutside, val => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });

      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }

    function handleShow (evt) {
      showPortal();

      // should removeTick() if this gets removed
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });

      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + '|' + $q.screen.height + '|' + props.self + '|' + props.anchor + '|' + $q.lang.rtl,
          updatePosition
        );
      }

      // should removeTimeout() if this gets removed
      registerTimeout(() => {
        showPortal(true); // done showing portal
        emit('show', evt);
      }, props.transitionDuration);
    }

    function handleHide (evt) {
      removeTick();
      hidePortal();

      anchorCleanup();

      // should removeTimeout() if this gets removed
      registerTimeout(() => {
        hidePortal(true); // done hiding, now destroy
        emit('hide', evt);
      }, props.transitionDuration);
    }

    function anchorCleanup () {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }

      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }

      unconfigureScrollTarget();
      cleanEvt(anchorEvents, 'tooltipTemp');
    }

    function updatePosition () {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }

    function delayShow (evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add('non-selectable');

        const target = anchorEl.value;
        const evts = [ 'touchmove', 'touchcancel', 'touchend', 'click' ]
          .map(e => ([ target, e, 'delayHide', 'passiveCapture' ]));

        addEvt(anchorEvents, 'tooltipTemp', evts);
      }

      registerTimeout(() => { show(evt); }, props.delay);
    }

    function delayHide (evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, 'tooltipTemp');
        clearSelection();
        // delay needed otherwise selection still occurs
        setTimeout(() => {
          document.body.classList.remove('non-selectable');
        }, 10);
      }

      // should removeTimeout() if this gets removed
      registerTimeout(() => { hide(evt); }, props.hideDelay);
    }

    function configureAnchorEl () {
      if (props.noParentEvent === true || anchorEl.value === null) return

      const evts = $q.platform.is.mobile === true
        ? [
            [ anchorEl.value, 'touchstart', 'delayShow', 'passive' ]
          ]
        : [
            [ anchorEl.value, 'mouseenter', 'delayShow', 'passive' ],
            [ anchorEl.value, 'mouseleave', 'delayHide', 'passive' ]
          ];

      addEvt(anchorEvents, 'anchor', evts);
    }

    function configureScrollTarget () {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true
          ? updatePosition
          : hide;

        changeScrollEvent(localScrollTarget.value, fn);
      }
    }

    onBeforeUnmount(anchorCleanup);

    // expose public methods
    Object.assign(vm.proxy, { updatePosition });

    return renderPortal
  }
});

const defaultSizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};

function width (val, reverse, $q) {
  return {
    transform: reverse === true
      ? `translateX(${ $q.lang.rtl === true ? '-' : '' }100%) scale3d(${ -val },1,1)`
      : `scale3d(${ val },1,1)`
  }
}

const __nuxt_component_9 = createComponent({
  name: 'QLinearProgress',

  props: {
    ...useDarkProps,
    ...useSizeProps,

    value: {
      type: Number,
      default: 0
    },
    buffer: Number,

    color: String,
    trackColor: String,

    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,

    animationSpeed: {
      type: [ String, Number ],
      default: 2100
    },

    instantFeedback: Boolean
  },

  setup (props, { slots }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, defaultSizes);

    const motion = computed(() => props.indeterminate === true || props.query === true);
    const widthReverse = computed(() => props.reverse !== props.query);
    const style = computed(() => ({
      ...(sizeStyle.value !== null ? sizeStyle.value : {}),
      '--q-linear-progress-speed': `${ props.animationSpeed }ms`
    }));

    const classes = computed(() =>
      'q-linear-progress'
      + (props.color !== void 0 ? ` text-${ props.color }` : '')
      + (props.reverse === true || props.query === true ? ' q-linear-progress--reverse' : '')
      + (props.rounded === true ? ' rounded-borders' : '')
    );

    const trackStyle = computed(() => width(props.buffer !== void 0 ? props.buffer : 1, widthReverse.value, proxy.$q));
    const transitionSuffix = computed(() => `with${ props.instantFeedback === true ? 'out' : '' }-transition`);

    const trackClass = computed(() =>
      'q-linear-progress__track absolute-full'
      + ` q-linear-progress__track--${ transitionSuffix.value }`
      + ` q-linear-progress__track--${ isDark.value === true ? 'dark' : 'light' }`
      + (props.trackColor !== void 0 ? ` bg-${ props.trackColor }` : '')
    );

    const modelStyle = computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
    const modelClass = computed(() =>
      'q-linear-progress__model absolute-full'
      + ` q-linear-progress__model--${ transitionSuffix.value }`
      + ` q-linear-progress__model--${ motion.value === true ? 'in' : '' }determinate`
    );

    const stripeStyle = computed(() => ({ width: `${ props.value * 100 }%` }));
    const stripeClass = computed(() =>
      `q-linear-progress__stripe absolute-${ props.reverse === true ? 'right' : 'left' }`
      + ` q-linear-progress__stripe--${ transitionSuffix.value }`
    );

    return () => {
      const child = [
        h('div', {
          class: trackClass.value,
          style: trackStyle.value
        }),

        h('div', {
          class: modelClass.value,
          style: modelStyle.value
        })
      ];

      props.stripe === true && motion.value === false && child.push(
        h('div', {
          class: stripeClass.value,
          style: stripeStyle.value
        })
      );

      return h('div', {
        class: classes.value,
        style: style.value,
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 1,
        'aria-valuenow': props.indeterminate === true
          ? void 0
          : props.value
      }, hMergeSlot(slots.default, child))
    }
  }
});

let counter = 0;

const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};

const useFullscreenEmits = [ 'update:fullscreen', 'fullscreen' ];

function useFullscreen () {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;

  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);

  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });

  watch(() => props.fullscreen, v => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });

  watch(inFullscreen, v => {
    emit('update:fullscreen', v);
    emit('fullscreen', v);
  });

  function toggleFullscreen () {
    if (inFullscreen.value === true) {
      exitFullscreen();
    }
    else {
      setFullscreen();
    }
  }

  function setFullscreen () {
    if (inFullscreen.value === true) {
      return
    }

    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);

    counter++;
    if (counter === 1) {
      document.body.classList.add('q-body--fullscreen-mixin');
    }

    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }

  function exitFullscreen () {
    if (inFullscreen.value !== true) {
      return
    }

    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }

    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;

    counter = Math.max(0, counter - 1);

    if (counter === 0) {
      document.body.classList.remove('q-body--fullscreen-mixin');

      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => { proxy.$el.scrollIntoView(); });
      }
    }
  }

  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement('span');
  });

  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });

  onBeforeUnmount(exitFullscreen);

  // expose public methods
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });

  return {
    inFullscreen,
    toggleFullscreen
  }
}

const navigationPositionOptions = [ 'top', 'right', 'bottom', 'left' ];
const controlTypeOptions = [ 'regular', 'flat', 'outline', 'push', 'unelevated' ];

const __nuxt_component_0$1 = createComponent({
  name: 'QCarousel',

  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,

    transitionPrev: { // usePanelParentProps override
      type: String,
      default: 'fade'
    },
    transitionNext: { // usePanelParentProps override
      type: String,
      default: 'fade'
    },

    height: String,
    padding: Boolean,

    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: v => controlTypeOptions.includes(v),
      default: 'flat'
    },

    autoplay: [ Number, Boolean ],

    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,

    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: v => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,

    thumbnails: Boolean
  },

  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const isDark = useDark(props, $q);

    let timer = null, panelsLen;

    const {
      updatePanelsList, getPanelContent,
      panelDirectives, goToPanel,
      previousPanel, nextPanel, getEnabledPanels,
      panelIndex
    } = usePanel();

    const { inFullscreen } = useFullscreen();

    const style = computed(() => (
      inFullscreen.value !== true && props.height !== void 0
        ? { height: props.height }
        : {}
    ));

    const direction = computed(() => (props.vertical === true ? 'vertical' : 'horizontal'));

    const navigationPosition = computed(() => props.navigationPosition
      || (props.vertical === true ? 'right' : 'bottom')
    );

    const classes = computed(() =>
      `q-carousel q-panel-parent q-carousel--with${ props.padding === true ? '' : 'out' }-padding`
      + (inFullscreen.value === true ? ' fullscreen' : '')
      + (isDark.value === true ? ' q-carousel--dark q-dark' : '')
      + (props.arrows === true ? ` q-carousel--arrows-${ direction.value }` : '')
      + (props.navigation === true ? ` q-carousel--navigation-${ navigationPosition.value }` : '')
    );

    const arrowIcons = computed(() => {
      const ico = [
        props.prevIcon || $q.iconSet.carousel[ props.vertical === true ? 'up' : 'left' ],
        props.nextIcon || $q.iconSet.carousel[ props.vertical === true ? 'down' : 'right' ]
      ];

      return props.vertical === false && $q.lang.rtl === true
        ? ico.reverse()
        : ico
    });

    const navIcon = computed(() => props.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props.navigationActiveIcon || navIcon.value);

    const controlProps = computed(() => ({
      color: props.controlColor,
      textColor: props.controlTextColor,
      round: true,
      [ props.controlType ]: true,
      dense: true
    }));

    watch(() => props.modelValue, () => {
      if (props.autoplay) {
        startTimer();
      }
    });

    watch(() => props.autoplay, val => {
      if (val) {
        startTimer();
      }
      else if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    });

    function startTimer () {
      const duration = isNumber(props.autoplay) === true
        ? Math.abs(props.autoplay)
        : 5000;

      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;

        if (duration >= 0) {
          nextPanel();
        }
        else {
          previousPanel();
        }
      }, duration);
    }

    onMounted(() => {
      props.autoplay && startTimer();
    });

    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
    });

    function getNavigationContainer (type, mapping) {
      return h('div', {
        class: 'q-carousel__control q-carousel__navigation no-wrap absolute flex'
          + ` q-carousel__navigation--${ type } q-carousel__navigation--${ navigationPosition.value }`
          + (props.controlColor !== void 0 ? ` text-${ props.controlColor }` : '')
      }, [
        h('div', {
          class: 'q-carousel__navigation-inner flex flex-center no-wrap'
        }, getEnabledPanels().map(mapping))
      ])
    }

    function getContent () {
      const node = [];

      if (props.navigation === true) {
        const fn = slots[ 'navigation-icon' ] !== void 0
          ? slots[ 'navigation-icon' ]
          : opts => h(__nuxt_component_1$1, {
            key: 'nav' + opts.name,
            class: `q-carousel__navigation-icon q-carousel__navigation-icon--${ opts.active === true ? '' : 'in' }active`,
            ...opts.btnProps,
            onClick: opts.onClick
          });

        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer('buttons', (panel, index) => {
            const name = panel.props.name;
            const active = panelIndex.value === index;

            return fn({
              index,
              maxIndex,
              name,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: 'sm',
                ...controlProps.value
              },
              onClick: () => { goToPanel(name); }
            })
          })
        );
      }
      else if (props.thumbnails === true) {
        const color = props.controlColor !== void 0
          ? ` text-${ props.controlColor }`
          : '';

        node.push(getNavigationContainer('thumbnails', panel => {
          const slide = panel.props;

          return h('img', {
            key: 'tmb#' + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${ slide.name === props.modelValue ? '' : 'in' }active` + color,
            src: slide.imgSrc || slide[ 'img-src' ],
            onClick: () => { goToPanel(slide.name); }
          })
        }));
      }

      if (props.arrows === true && panelIndex.value >= 0) {
        if (props.infinite === true || panelIndex.value > 0) {
          node.push(
            h('div', {
              key: 'prev',
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${ direction.value } absolute flex flex-center`
            }, [
              h(__nuxt_component_1$1, {
                icon: arrowIcons.value[ 0 ],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }

        if (props.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h('div', {
              key: 'next',
              class: 'q-carousel__control q-carousel__arrow q-carousel__next-arrow'
                + ` q-carousel__next-arrow--${ direction.value } absolute flex flex-center`
            }, [
              h(__nuxt_component_1$1, {
                icon: arrowIcons.value[ 1 ],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }

      return hMergeSlot(slots.control, node)
    }

    return () => {
      panelsLen = updatePanelsList(slots);

      return h('div', {
        class: classes.value,
        style: style.value
      }, [
        hDir(
          'div',
          { class: 'q-carousel__slides-container' },
          getPanelContent(),
          'sl-cont',
          props.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()))
    }
  }
});

const __nuxt_component_1$2 = createComponent({
  name: 'QCarouselSlide',

  props: {
    ...usePanelChildProps,
    imgSrc: String
  },

  setup (props, { slots }) {
    const style = computed(() => (
      props.imgSrc
        ? { backgroundImage: `url("${ props.imgSrc }")` }
        : {}
    ));

    return () => h('div', {
      class: 'q-carousel__slide',
      style: style.value
    }, hSlot(slots.default))
  }
});

const __nuxt_component_0$3 = createComponent({
  name: 'QPage',

  props: {
    padding: Boolean,
    styleFn: Function
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QPage needs to be a deep child of QLayout');
      return emptyRenderFn
    }

    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error('QPage needs to be child of QPageContainer');
      return emptyRenderFn
    }

    const style = computed(() => {
      const offset
        = ($layout.header.space === true ? $layout.header.size : 0)
        + ($layout.footer.space === true ? $layout.footer.size : 0);

      if (typeof props.styleFn === 'function') {
        const height = $layout.isContainer.value === true
          ? $layout.containerHeight.value
          : $q.screen.height;

        return props.styleFn(offset, height)
      }

      return {
        minHeight: $layout.isContainer.value === true
          ? ($layout.containerHeight.value - offset) + 'px'
          : (
              $q.screen.height === 0
                ? (offset !== 0 ? `calc(100vh - ${ offset }px)` : '100vh')
                : ($q.screen.height - offset) + 'px'
            )
      }
    });

    const classes = computed(() =>
      `q-page${ props.padding === true ? ' q-layout-padding' : '' }`
    );

    return () => h('main', {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default))
  }
});

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_q_card_section = __nuxt_component_0$1$1;
  const _component_q_card = __nuxt_component_1;
  const _component_q_item_section = __nuxt_component_2$1;
  const _component_q_img = __nuxt_component_3;
  const _component_q_item_label = __nuxt_component_4;
  const _component_q_icon = __nuxt_component_4$1;
  const _component_q_btn = __nuxt_component_1$1;
  const _component_q_badge = __nuxt_component_7;
  const _component_q_tooltip = __nuxt_component_8;
  const _component_q_linear_progress = __nuxt_component_9;
  const _directive_ripple = __q_directive_0;
  _push(ssrRenderComponent(_component_q_card_section, mergeProps({ style: {} }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_card, mergeProps({ clickable: "" }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<section class="flex q-pa-md"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_q_item_section, { avatar: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_img, {
                      src: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
                      ratio: 1 / 1,
                      "spinner-color": "primary",
                      "spinner-size": "82px"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_img, {
                        src: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
                        ratio: 1 / 1,
                        "spinner-color": "primary",
                        "spinner-size": "82px"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_item_section, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_item_label, { class: "text-subtitle1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Sisben`);
                        } else {
                          return [
                            createTextVNode("Sisben")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      class: "flex",
                      caption: ""
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_icon, {
                            name: "event",
                            class: "q-mr-xs"
                          }, null, _parent5, _scopeId4));
                          _push5(`<div${_scopeId4}><b${_scopeId4}>Fecha:</b> 18-09-2024</div>`);
                        } else {
                          return [
                            createVNode(_component_q_icon, {
                              name: "event",
                              class: "q-mr-xs"
                            }),
                            createVNode("div", null, [
                              createVNode("b", null, "Fecha:"),
                              createTextVNode(" 18-09-2024")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item_label, { caption: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_icon, {
                            name: "access_alarms",
                            class: "q-mr-xs"
                          }, null, _parent5, _scopeId4));
                          _push5(`<b${_scopeId4}>Hora Aproximada:</b> 03:00`);
                        } else {
                          return [
                            createVNode(_component_q_icon, {
                              name: "access_alarms",
                              class: "q-mr-xs"
                            }),
                            createVNode("b", null, "Hora Aproximada:"),
                            createTextVNode(" 03:00")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_q_item_label, {
                      caption: "",
                      class: "flex q-pt-md"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "person",
                            class: "q-ml-md"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_badge, {
                                  color: "red",
                                  floating: ""
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`4`);
                                    } else {
                                      return [
                                        createTextVNode("4")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_tooltip, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Ahora mismo hay 4 personas en la cola `);
                                    } else {
                                      return [
                                        createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_badge, {
                                    color: "red",
                                    floating: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("4")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_tooltip, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "notifications",
                            class: "q-ml-md"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_q_badge, {
                                  color: "red",
                                  floating: ""
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`4`);
                                    } else {
                                      return [
                                        createTextVNode("4")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_q_tooltip, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Tienes 4 notificaciones `);
                                    } else {
                                      return [
                                        createTextVNode(" Tienes 4 notificaciones ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_q_badge, {
                                    color: "red",
                                    floating: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("4")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_q_tooltip, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tienes 4 notificaciones ")
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
                            createVNode(_component_q_btn, {
                              flat: "",
                              color: "purple",
                              round: "",
                              icon: "person",
                              class: "q-ml-md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_badge, {
                                  color: "red",
                                  floating: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("4")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_tooltip, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_btn, {
                              flat: "",
                              color: "purple",
                              round: "",
                              icon: "notifications",
                              class: "q-ml-md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_q_badge, {
                                  color: "red",
                                  floating: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("4")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_q_tooltip, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Tienes 4 notificaciones ")
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
                      createVNode(_component_q_item_label, { class: "text-subtitle1" }, {
                        default: withCtx(() => [
                          createTextVNode("Sisben")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, {
                        class: "flex",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_icon, {
                            name: "event",
                            class: "q-mr-xs"
                          }),
                          createVNode("div", null, [
                            createVNode("b", null, "Fecha:"),
                            createTextVNode(" 18-09-2024")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { caption: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_q_icon, {
                            name: "access_alarms",
                            class: "q-mr-xs"
                          }),
                          createVNode("b", null, "Hora Aproximada:"),
                          createTextVNode(" 03:00")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, {
                        caption: "",
                        class: "flex q-pt-md"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "person",
                            class: "q-ml-md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_badge, {
                                color: "red",
                                floating: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("4")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_tooltip, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "notifications",
                            class: "q-ml-md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_badge, {
                                color: "red",
                                floating: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("4")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_tooltip, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Tienes 4 notificaciones ")
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
              _push3(`</section>`);
              _push3(ssrRenderComponent(_component_q_linear_progress, {
                indeterminate: "",
                color: "primary"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("section", { class: "flex q-pa-md" }, [
                  createVNode(_component_q_item_section, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_q_img, {
                        src: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
                        ratio: 1 / 1,
                        "spinner-color": "primary",
                        "spinner-size": "82px"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_item_section, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_item_label, { class: "text-subtitle1" }, {
                        default: withCtx(() => [
                          createTextVNode("Sisben")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, {
                        class: "flex",
                        caption: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_icon, {
                            name: "event",
                            class: "q-mr-xs"
                          }),
                          createVNode("div", null, [
                            createVNode("b", null, "Fecha:"),
                            createTextVNode(" 18-09-2024")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, { caption: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_q_icon, {
                            name: "access_alarms",
                            class: "q-mr-xs"
                          }),
                          createVNode("b", null, "Hora Aproximada:"),
                          createTextVNode(" 03:00")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_item_label, {
                        caption: "",
                        class: "flex q-pt-md"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "person",
                            class: "q-ml-md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_badge, {
                                color: "red",
                                floating: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("4")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_tooltip, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_q_btn, {
                            flat: "",
                            color: "purple",
                            round: "",
                            icon: "notifications",
                            class: "q-ml-md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_q_badge, {
                                color: "red",
                                floating: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("4")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_q_tooltip, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Tienes 4 notificaciones ")
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
                createVNode(_component_q_linear_progress, {
                  indeterminate: "",
                  color: "primary"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          withDirectives((openBlock(), createBlock(_component_q_card, { clickable: "" }, {
            default: withCtx(() => [
              createVNode("section", { class: "flex q-pa-md" }, [
                createVNode(_component_q_item_section, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_q_img, {
                      src: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
                      ratio: 1 / 1,
                      "spinner-color": "primary",
                      "spinner-size": "82px"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_q_item_section, null, {
                  default: withCtx(() => [
                    createVNode(_component_q_item_label, { class: "text-subtitle1" }, {
                      default: withCtx(() => [
                        createTextVNode("Sisben")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_item_label, {
                      class: "flex",
                      caption: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_icon, {
                          name: "event",
                          class: "q-mr-xs"
                        }),
                        createVNode("div", null, [
                          createVNode("b", null, "Fecha:"),
                          createTextVNode(" 18-09-2024")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_item_label, { caption: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_q_icon, {
                          name: "access_alarms",
                          class: "q-mr-xs"
                        }),
                        createVNode("b", null, "Hora Aproximada:"),
                        createTextVNode(" 03:00")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_item_label, {
                      caption: "",
                      class: "flex q-pt-md"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_btn, {
                          flat: "",
                          color: "purple",
                          round: "",
                          icon: "person",
                          class: "q-ml-md"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_badge, {
                              color: "red",
                              floating: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("4")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_tooltip, null, {
                              default: withCtx(() => [
                                createTextVNode(" Ahora mismo hay 4 personas en la cola ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_q_btn, {
                          flat: "",
                          color: "purple",
                          round: "",
                          icon: "notifications",
                          class: "q-ml-md"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_badge, {
                              color: "red",
                              floating: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("4")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_q_tooltip, null, {
                              default: withCtx(() => [
                                createTextVNode(" Tienes 4 notificaciones ")
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
              createVNode(_component_q_linear_progress, {
                indeterminate: "",
                color: "primary"
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
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardStatusAwait.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatusAppointment",
  __ssrInlineRender: true,
  setup(__props) {
    const citas = ref([
      {
        id: 1,
        name: "Cita 1",
        date: "2021-10-10",
        time: "10:00",
        status: "pending"
      },
      {
        id: 2,
        name: "Cita 2",
        date: "2021-10-10",
        time: "10:00",
        status: "pending"
      },
      {
        id: 3,
        name: "Cita 3",
        date: "2021-10-10",
        time: "10:00",
        status: "pending"
      },
      {
        id: 4,
        name: "Cita 3",
        date: "2021-10-10",
        time: "10:00",
        status: "pending"
      }
    ]);
    const dividir = computed(() => {
      return citas.value.map((itm, i) => {
        const acc = [];
        if ((i + 1) % 2 === 0) {
          acc.push(citas.value[i - 1]);
          acc.push(itm);
        }
        if (citas.value.length - 1 === i && citas.value.length % 2 !== 0) {
          acc.push(itm);
        }
        return acc;
      }, []).filter((itm) => itm.length > 0);
    });
    const slide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_carousel = __nuxt_component_0$1;
      const _component_q_carousel_slide = __nuxt_component_1$2;
      const _component_card_status_await = __nuxt_component_2;
      _push(ssrRenderComponent(_component_q_carousel, mergeProps({
        modelValue: slide.value,
        "onUpdate:modelValue": ($event) => slide.value = $event,
        "transition-prev": "slide-right",
        "transition-next": "slide-left",
        swipeable: "",
        animated: "",
        "control-color": "primary",
        navigation: "",
        padding: "",
        arrows: "",
        height: "250px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(dividir.value, (itm, index2) => {
              _push2(ssrRenderComponent(_component_q_carousel_slide, {
                name: index2,
                class: "column no-wrap justify-center",
                style: { "align-items": "center" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="row wrap" style="${ssrRenderStyle({ "flex-wrap": "nowrap", "width": "100%" })}"${_scopeId2}><!--[-->`);
                    ssrRenderList(itm, (it) => {
                      _push3(ssrRenderComponent(_component_card_status_await, { class: "col-6" }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "row wrap",
                        style: { "flex-wrap": "nowrap", "width": "100%" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(itm, (it) => {
                          return openBlock(), createBlock(_component_card_status_await, { class: "col-6" });
                        }), 256))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(dividir.value, (itm, index2) => {
                return openBlock(), createBlock(_component_q_carousel_slide, {
                  name: index2,
                  class: "column no-wrap justify-center",
                  style: { "align-items": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "row wrap",
                      style: { "flex-wrap": "nowrap", "width": "100%" }
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(itm, (it) => {
                        return openBlock(), createBlock(_component_card_status_await, { class: "col-6" });
                      }), 256))
                    ])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatusAppointment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListCompany",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("");
    const sucursales = ref([
      {
        id: 1,
        nombre: "Sisben",
        direccion: "Calle 1 # 2-3",
        celular: "1234567890",
        imagen: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
        domingo_apertura: null,
        domingo_cierre: null,
        lues_apertura: null,
        lunes_cierre: null,
        martes_apertura: null,
        martes_cierre: null,
        miercoles_apertura: null,
        miercoles_cierre: null,
        jueves_apertura: null,
        jueves_cierre: null,
        viernes_apertura: null,
        viernes_cierre: null,
        sabado_apertura: null,
        sabado_cierre: null,
        id_cia: 1,
        tiempo_por_usuario: 10,
        usuario_por_dia: 10
      },
      {
        id: 2,
        nombre: "Registraduria",
        direccion: "Calle 1 # 2-3",
        celular: "1234567890",
        imagen: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
        domingo_apertura: null,
        domingo_cierre: null,
        lues_apertura: null,
        lunes_cierre: null,
        martes_apertura: null,
        martes_cierre: null,
        miercoles_apertura: null,
        miercoles_cierre: null,
        jueves_apertura: null,
        jueves_cierre: null,
        viernes_apertura: null,
        viernes_cierre: null,
        sabado_apertura: null,
        sabado_cierre: null,
        id_cia: 1,
        tiempo_por_usuario: 10,
        usuario_por_dia: 10
      },
      {
        id: 3,
        nombre: "Notaria",
        direccion: "Calle 1 # 2-3",
        celular: "1234567890",
        imagen: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
        domingo_apertura: null,
        domingo_cierre: null,
        lues_apertura: null,
        lunes_cierre: null,
        martes_apertura: null,
        martes_cierre: null,
        miercoles_apertura: null,
        miercoles_cierre: null,
        jueves_apertura: null,
        jueves_cierre: null,
        viernes_apertura: null,
        viernes_cierre: null,
        sabado_apertura: null,
        sabado_cierre: null,
        id_cia: 1,
        tiempo_por_usuario: 10,
        usuario_por_dia: 10
      },
      {
        id: 4,
        nombre: "Alcaldia",
        direccion: "Calle 1 # 2-3",
        celular: "1234567890",
        imagen: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
        domingo_apertura: null,
        domingo_cierre: null,
        lues_apertura: null,
        lunes_cierre: null,
        martes_apertura: null,
        martes_cierre: null,
        miercoles_apertura: null,
        miercoles_cierre: null,
        jueves_apertura: null,
        jueves_cierre: null,
        viernes_apertura: null,
        viernes_cierre: null,
        sabado_apertura: null,
        sabado_cierre: null,
        id_cia: 1,
        tiempo_por_usuario: 10,
        usuario_por_dia: 10
      },
      {
        id: 5,
        nombre: "Clinica el Rosario",
        direccion: "Calle 1 # 2-3",
        celular: "1234567890",
        imagen: "https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",
        domingo_apertura: null,
        domingo_cierre: null,
        lues_apertura: null,
        lunes_cierre: null,
        martes_apertura: null,
        martes_cierre: null,
        miercoles_apertura: null,
        miercoles_cierre: null,
        jueves_apertura: null,
        jueves_cierre: null,
        viernes_apertura: null,
        viernes_cierre: null,
        sabado_apertura: null,
        sabado_cierre: null,
        id_cia: 1,
        tiempo_por_usuario: 10,
        usuario_por_dia: 10
      }
    ]);
    const filtrar = () => {
      return sucursales.value.filter((suc) => {
        return suc.nombre.toLowerCase().includes(text.value.toLowerCase());
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_input = __nuxt_component_0$2;
      const _component_q_btn = __nuxt_component_1$1;
      const _component_q_card = __nuxt_component_1;
      const _component_q_card_section = __nuxt_component_0$1$1;
      const _component_q_icon = __nuxt_component_4$1;
      _push(`<!--[--><section class="q-pt-xl" style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "1fr 50px", "max-width": "400px", "margin": "10px auto", "gap": "2px" })}">`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: text.value,
        "onUpdate:modelValue": ($event) => text.value = $event,
        type: "text",
        label: "Buscar compa\xF1\xEDas",
        class: "bg-white"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        icon: "search",
        flat: "",
        color: "primary"
      }, null, _parent));
      _push(`</section><section class="bg-white q-pa-md flex gap-3 justify-center" style="${ssrRenderStyle({ "min-height": "200px" })}"><!--[-->`);
      ssrRenderList(filtrar(), (suc) => {
        _push(ssrRenderComponent(_component_q_card, {
          class: "my-card q-pa-xs",
          style: { "width": "100%", "max-width": "300px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><img style="${ssrRenderStyle({ "height": "200px", "width": "100%", "object-fit": "cover", "object-position": "center" })}"${ssrRenderAttr("src", suc.imagen)}${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_q_card_section, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-h6"${_scopeId2}>${ssrInterpolate(suc.nombre)}</div><div class="text-subtitle2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_q_icon, {
                      name: "location_on",
                      class: "q-mr-xs"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(suc.direccion)}</div><div class="text-caption"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_q_icon, {
                      name: "phone",
                      class: "q-mr-xs"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(suc.celular)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-h6" }, toDisplayString(suc.nombre), 1),
                      createVNode("div", { class: "text-subtitle2" }, [
                        createVNode(_component_q_icon, {
                          name: "location_on",
                          class: "q-mr-xs"
                        }),
                        createTextVNode(" " + toDisplayString(suc.direccion), 1)
                      ]),
                      createVNode("div", { class: "text-caption" }, [
                        createVNode(_component_q_icon, {
                          name: "phone",
                          class: "q-mr-xs"
                        }),
                        createTextVNode(" " + toDisplayString(suc.celular), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", null, [
                  createVNode("img", {
                    style: { "height": "200px", "width": "100%", "object-fit": "cover", "object-position": "center" },
                    src: suc.imagen
                  }, null, 8, ["src"])
                ]),
                createVNode(_component_q_card_section, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-h6" }, toDisplayString(suc.nombre), 1),
                    createVNode("div", { class: "text-subtitle2" }, [
                      createVNode(_component_q_icon, {
                        name: "location_on",
                        class: "q-mr-xs"
                      }),
                      createTextVNode(" " + toDisplayString(suc.direccion), 1)
                    ]),
                    createVNode("div", { class: "text-caption" }, [
                      createVNode(_component_q_icon, {
                        name: "phone",
                        class: "q-mr-xs"
                      }),
                      createTextVNode(" " + toDisplayString(suc.celular), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListCompany.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_page = __nuxt_component_0$3;
  const _component_StatusAppointment = _sfc_main$2;
  const _component_ListCompany = _sfc_main$1;
  _push(ssrRenderComponent(_component_q_page, mergeProps({ class: "q-mt-md q-pa-lg" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-h6 text-center q-pb-sm"${_scopeId}>Mis Citas en Proceso</div>`);
        _push2(ssrRenderComponent(_component_StatusAppointment, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ListCompany, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-h6 text-center q-pb-sm" }, "Mis Citas en Proceso"),
          createVNode(_component_StatusAppointment),
          createVNode(_component_ListCompany)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DJ9jX_lB.mjs.map
