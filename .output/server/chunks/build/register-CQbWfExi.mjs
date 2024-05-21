import { _ as __nuxt_component_0$1 } from './nuxt-link-DZ12xbRX.mjs';
import { getCurrentInstance, ref, computed, h, withDirectives, provide, onBeforeUnmount, Transition, inject, KeepAlive, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_4$1, u as useDarkProps, a as useDark, h as hMergeSlot, b as hSlot, c as hDir } from '../_/use-dark.mjs';
import { a as __q_directive_0, _ as __nuxt_component_1$1 } from '../_/focus-manager.mjs';
import { g as createComponent, s as stepperKey, h as emptyRenderFn } from './server.mjs';
import { u as usePanelProps, a as usePanelEmits, b as usePanel, c as usePanelChildProps, d as useRenderCache } from '../_/use-panel.mjs';
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

const StepHeader = createComponent({
  name: 'StepHeader',

  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },

  setup (props, { attrs }) {
    const { proxy: { $q } } = getCurrentInstance();
    const blurRef = ref(null);

    const isActive = computed(() => props.stepper.modelValue === props.step.name);

    const isDisable = computed(() => {
      const opt = props.step.disable;
      return opt === true || opt === ''
    });

    const isError = computed(() => {
      const opt = props.step.error;
      return opt === true || opt === ''
    });

    const isDone = computed(() => {
      const opt = props.step.done;
      return isDisable.value === false && (opt === true || opt === '')
    });

    const headerNav = computed(() => {
      const
        opt = props.step.headerNav,
        nav = opt === true || opt === '' || opt === void 0;

      return isDisable.value === false
        && props.stepper.headerNav
        && nav
    });

    const hasPrefix = computed(() => {
      return props.step.prefix
        && (isActive.value === false || props.stepper.activeIcon === 'none')
        && (isError.value === false || props.stepper.errorIcon === 'none')
        && (isDone.value === false || props.stepper.doneIcon === 'none')
    });

    const icon = computed(() => {
      const defaultIcon = props.step.icon || props.stepper.inactiveIcon;

      if (isActive.value === true) {
        const icon = props.step.activeIcon || props.stepper.activeIcon;
        return icon === 'none'
          ? defaultIcon
          : icon || $q.iconSet.stepper.active
      }

      if (isError.value === true) {
        const icon = props.step.errorIcon || props.stepper.errorIcon;
        return icon === 'none'
          ? defaultIcon
          : icon || $q.iconSet.stepper.error
      }

      if (isDisable.value === false && isDone.value === true) {
        const icon = props.step.doneIcon || props.stepper.doneIcon;
        return icon === 'none'
          ? defaultIcon
          : icon || $q.iconSet.stepper.done
      }

      return defaultIcon
    });

    const color = computed(() => {
      const errorColor = isError.value === true
        ? props.step.errorColor || props.stepper.errorColor
        : void 0;

      if (isActive.value === true) {
        const color = props.step.activeColor || props.stepper.activeColor || props.step.color;
        return color !== void 0
          ? color
          : errorColor
      }
      if (errorColor !== void 0) {
        return errorColor
      }
      if (isDisable.value === false && isDone.value === true) {
        return props.step.doneColor || props.stepper.doneColor || props.step.color || props.stepper.inactiveColor
      }

      return props.step.color || props.stepper.inactiveColor
    });

    const classes = computed(() => {
      return 'q-stepper__tab col-grow flex items-center no-wrap relative-position'
        + (color.value !== void 0 ? ` text-${ color.value }` : '')
        + (isError.value === true
          ? ' q-stepper__tab--error q-stepper__tab--error-with-' + (hasPrefix.value === true ? 'prefix' : 'icon')
          : '')
        + (isActive.value === true ? ' q-stepper__tab--active' : '')
        + (isDone.value === true ? ' q-stepper__tab--done' : '')
        + (headerNav.value === true ? ' q-stepper__tab--navigation q-focusable q-hoverable' : '')
        + (isDisable.value === true ? ' q-stepper__tab--disabled' : '')
    });

    const ripple = computed(() => (
      props.stepper.headerNav !== true
        ? false
        : headerNav.value
    ));

    function onActivate () {
      blurRef.value !== null && blurRef.value.focus();
      isActive.value === false && props.goToPanel(props.step.name);
    }

    function onKeyup (e) {
      if (e.keyCode === 13 && isActive.value === false) {
        props.goToPanel(props.step.name);
      }
    }

    return () => {
      const data = { class: classes.value };

      if (headerNav.value === true) {
        data.onClick = onActivate;
        data.onKeyup = onKeyup;

        Object.assign(data,
          isDisable.value === true
            ? { tabindex: -1, 'aria-disabled': 'true' }
            : { tabindex: attrs.tabindex || 0 }
        );
      }

      const child = [
        h('div', { class: 'q-focus-helper', tabindex: -1, ref: blurRef }),

        h('div', { class: 'q-stepper__dot row flex-center q-stepper__line relative-position' }, [
          h('span', { class: 'row flex-center' }, [
            hasPrefix.value === true
              ? props.step.prefix
              : h(__nuxt_component_4$1, { name: icon.value })
          ])
        ])
      ];

      if (props.step.title !== void 0 && props.step.title !== null) {
        const content = [
          h('div', { class: 'q-stepper__title' }, props.step.title)
        ];

        if (props.step.caption !== void 0 && props.step.caption !== null) {
          content.push(
            h('div', { class: 'q-stepper__caption' }, props.step.caption)
          );
        }

        child.push(
          h('div', {
            class: 'q-stepper__label q-stepper__line relative-position'
          }, content)
        );
      }

      return withDirectives(
        h('div', data, child),
        [ [ __q_directive_0, ripple.value ] ]
      )
    }
  }
});

const camelRE = /(-\w)/g;

function camelizeProps (props) {
  const acc = {};
  for (const key in props) {
    const newKey = key.replace(camelRE, m => m[ 1 ].toUpperCase());
    acc[ newKey ] = props[ key ];
  }
  return acc
}

const __nuxt_component_0 = createComponent({
  name: 'QStepper',

  props: {
    ...useDarkProps,
    ...usePanelProps,

    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,

    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },

  emits: usePanelEmits,

  setup (props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);

    const {
      updatePanelsList, isValidPanelName,
      updatePanelIndex, getPanelContent,
      getPanels, panelDirectives, goToPanel,
      keepAliveProps, needsUniqueKeepAliveWrapper
    } = usePanel();

    provide(stepperKey, computed(() => ({
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper,
      ...props
    })));

    const classes = computed(() =>
      `q-stepper q-stepper--${ props.vertical === true ? 'vertical' : 'horizontal' }`
      + (props.flat === true ? ' q-stepper--flat' : '')
      + (props.bordered === true ? ' q-stepper--bordered' : '')
      + (isDark.value === true ? ' q-stepper--dark q-dark' : '')
    );

    const headerClasses = computed(() =>
      'q-stepper__header row items-stretch justify-between'
      + ` q-stepper__header--${ props.alternativeLabels === true ? 'alternative' : 'standard' }-labels`
      + (props.flat === false || props.bordered === true ? ' q-stepper__header--border' : '')
      + (props.contracted === true ? ' q-stepper__header--contracted' : '')
      + (props.headerClass !== void 0 ? ` ${ props.headerClass }` : '')
    );

    function getContent () {
      const top = hSlot(slots.message, []);

      if (props.vertical === true) {
        isValidPanelName(props.modelValue) && updatePanelIndex();

        const content = h('div', {
          class: 'q-stepper__content'
        }, hSlot(slots.default));

        return top === void 0
          ? [ content ]
          : top.concat(content)
      }

      return [
        h(
          'div',
          { class: headerClasses.value },
          getPanels().map(panel => {
            const step = camelizeProps(panel.props);

            return h(StepHeader, {
              key: step.name,
              stepper: props,
              step,
              goToPanel
            })
          })
        ),

        top,

        hDir(
          'div',
          { class: 'q-stepper__content q-panel-parent' },
          getPanelContent(),
          'cont',
          props.swipeable,
          () => panelDirectives.value
        )
      ]
    }

    return () => {
      updatePanelsList(slots);

      return h('div', {
        class: classes.value
      }, hMergeSlot(slots.navigation, getContent()))
    }
  }
});

const QSlideTransition = createComponent({
  name: 'QSlideTransition',

  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },

  emits: [ 'show', 'hide' ],

  setup (props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;

    function cleanup () {
      doneFn && doneFn();
      doneFn = null;
      animating = false;

      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }

      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }

      element !== void 0 && element.removeEventListener('transitionend', animListener);
      animListener = null;
    }

    function begin (el, height, done) {
      // here overflowY is 'hidden'
      if (height !== void 0) {
        el.style.height = `${ height }px`;
      }
      el.style.transition = `height ${ props.duration }ms cubic-bezier(.25, .8, .50, 1)`;

      animating = true;
      doneFn = done;
    }

    function end (el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }

    function onEnter (el, done) {
      let pos = 0;
      element = el;

      // if animationg overflowY is already 'hidden'
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      }
      else {
        lastEvent = 'hide';
        el.style.overflowY = 'hidden';
      }

      begin(el, pos, done);

      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${ el.scrollHeight }px`;
        animListener = evt => {
          timerFallback = null;

          if (Object(evt) !== evt || evt.target === el) {
            end(el, 'show');
          }
        };
        el.addEventListener('transitionend', animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }

    function onLeave (el, done) {
      let pos;
      element = el;

      if (animating === true) {
        cleanup();
      }
      else {
        lastEvent = 'show';
        // we need to set overflowY 'hidden' before calculating the height
        // or else we get small differences
        el.style.overflowY = 'hidden';
        pos = el.scrollHeight;
      }

      begin(el, pos, done);

      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = evt => {
          timerFallback = null;

          if (Object(evt) !== evt || evt.target === el) {
            end(el, 'hide');
          }
        };
        el.addEventListener('transitionend', animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }

    onBeforeUnmount(() => {
      animating === true && cleanup();
    });

    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default)
  }
});

function getStepWrapper (slots) {
  return h('div', {
    class: 'q-stepper__step-content'
  }, [
    h('div', {
      class: 'q-stepper__step-inner'
    }, hSlot(slots.default))
  ])
}

const PanelWrapper = {
  setup (_, { slots }) {
    return () => getStepWrapper(slots)
  }
};

const __nuxt_component_1 = createComponent({
  name: 'QStep',

  props: {
    ...usePanelChildProps,

    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [ String, Number ],

    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,

    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean,

    onScroll: [ Function, Array ]
  },

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $stepper = inject(stepperKey, emptyRenderFn);
    if ($stepper === emptyRenderFn) {
      console.error('QStep needs to be a child of QStepper');
      return emptyRenderFn
    }

    const { getCache } = useRenderCache();

    const rootRef = ref(null);

    const isActive = computed(() => $stepper.value.modelValue === props.name);

    const scrollEvent = computed(() => (
      ($q.platform.is.ios !== true && $q.platform.is.chrome === true)
        || isActive.value !== true
        || $stepper.value.vertical !== true
        ? {}
        : {
            onScroll (e) {
              const { target } = e;
              if (target.scrollTop > 0) {
                target.scrollTop = 0;
              }
              props.onScroll !== void 0 && emit('scroll', e);
            }
          }
    ));

    const contentKey = computed(() => (
      typeof props.name === 'string' || typeof props.name === 'number'
        ? props.name
        : String(props.name)
    ));

    function getStepContent () {
      const vertical = $stepper.value.vertical;

      if (vertical === true && $stepper.value.keepAlive === true) {
        return h(
          KeepAlive,
          $stepper.value.keepAliveProps.value,
          isActive.value === true
            ? [
                h(
                  $stepper.value.needsUniqueKeepAliveWrapper.value === true
                    ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value }))
                    : PanelWrapper,
                  { key: contentKey.value },
                  slots.default
                )
              ]
            : void 0
        )
      }

      return vertical !== true || isActive.value === true
        ? getStepWrapper(slots)
        : void 0
    }

    return () => h(
      'div',
      { ref: rootRef, class: 'q-stepper__step', role: 'tabpanel', ...scrollEvent.value },
      $stepper.value.vertical === true
        ? [
            h(StepHeader, {
              stepper: $stepper.value,
              step: props,
              goToPanel: $stepper.value.goToPanel
            }),

            $stepper.value.animated === true
              ? h(QSlideTransition, getStepContent)
              : getStepContent()
          ]
        : [ getStepContent() ]
    )
  }
});

const __nuxt_component_3 = createComponent({
  name: 'QStepperNavigation',

  setup (_, { slots }) {
    return () => h('div', { class: 'q-stepper__nav' }, hSlot(slots.default))
  }
});

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_stepper = __nuxt_component_0;
      const _component_q_step = __nuxt_component_1;
      const _component_q_input = __nuxt_component_0$2;
      const _component_q_stepper_navigation = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "q-pa-md" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_q_stepper, {
        modelValue: step.value,
        "onUpdate:modelValue": ($event) => step.value = $event,
        vertical: "",
        color: "primary",
        animated: "",
        style: { "background-color": "#fff" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_step, {
              name: 1,
              title: "Crear empresa",
              caption: "Requerido",
              icon: "settings",
              done: step.value > 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.name,
                    "onUpdate:modelValue": ($event) => _ctx.name = $event,
                    label: "Nombre de la empresa *",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.phone,
                    "onUpdate:modelValue": ($event) => _ctx.phone = $event,
                    label: "Telefono",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    label: "Sitio Web",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_stepper_navigation, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, {
                          onClick: ($event) => step.value = 2,
                          color: "primary",
                          label: "Continue"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_btn, {
                            onClick: ($event) => step.value = 2,
                            color: "primary",
                            label: "Continue"
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.name,
                      "onUpdate:modelValue": ($event) => _ctx.name = $event,
                      label: "Nombre de la empresa *",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.phone,
                      "onUpdate:modelValue": ($event) => _ctx.phone = $event,
                      label: "Telefono",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.email,
                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                      label: "Sitio Web",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_stepper_navigation, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_btn, {
                          onClick: ($event) => step.value = 2,
                          color: "primary",
                          label: "Continue"
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_step, {
              name: 2,
              title: "Crear Usuario",
              caption: "Requerido",
              icon: "person",
              done: step.value > 2
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.username,
                    "onUpdate:modelValue": ($event) => _ctx.username = $event,
                    label: "Nombre de usuario *",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    label: "Correo electr\xF3nico *",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    label: "Contrase\xF1a *",
                    type: "password",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.confirmPassword,
                    "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                    label: "Confirmar contrase\xF1a *",
                    type: "password",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_stepper_navigation, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, {
                          onClick: ($event) => step.value = 4,
                          color: "primary",
                          label: "Crear"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_btn, {
                          flat: "",
                          onClick: ($event) => step.value = 1,
                          color: "primary",
                          label: "Regresar",
                          class: "q-ml-sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_btn, {
                            onClick: ($event) => step.value = 4,
                            color: "primary",
                            label: "Crear"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_q_btn, {
                            flat: "",
                            onClick: ($event) => step.value = 1,
                            color: "primary",
                            label: "Regresar",
                            class: "q-ml-sm"
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.username,
                      "onUpdate:modelValue": ($event) => _ctx.username = $event,
                      label: "Nombre de usuario *",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.email,
                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                      label: "Correo electr\xF3nico *",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      label: "Contrase\xF1a *",
                      type: "password",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.confirmPassword,
                      "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                      label: "Confirmar contrase\xF1a *",
                      type: "password",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_stepper_navigation, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_btn, {
                          onClick: ($event) => step.value = 4,
                          color: "primary",
                          label: "Crear"
                        }, null, 8, ["onClick"]),
                        createVNode(_component_q_btn, {
                          flat: "",
                          onClick: ($event) => step.value = 1,
                          color: "primary",
                          label: "Regresar",
                          class: "q-ml-sm"
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_step, {
                name: 1,
                title: "Crear empresa",
                caption: "Requerido",
                icon: "settings",
                done: step.value > 1
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.name,
                    "onUpdate:modelValue": ($event) => _ctx.name = $event,
                    label: "Nombre de la empresa *",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.phone,
                    "onUpdate:modelValue": ($event) => _ctx.phone = $event,
                    label: "Telefono",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    label: "Sitio Web",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_stepper_navigation, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_btn, {
                        onClick: ($event) => step.value = 2,
                        color: "primary",
                        label: "Continue"
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["done"]),
              createVNode(_component_q_step, {
                name: 2,
                title: "Crear Usuario",
                caption: "Requerido",
                icon: "person",
                done: step.value > 2
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.username,
                    "onUpdate:modelValue": ($event) => _ctx.username = $event,
                    label: "Nombre de usuario *",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    label: "Correo electr\xF3nico *",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    label: "Contrase\xF1a *",
                    type: "password",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.confirmPassword,
                    "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                    label: "Confirmar contrase\xF1a *",
                    type: "password",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_stepper_navigation, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_btn, {
                        onClick: ($event) => step.value = 4,
                        color: "primary",
                        label: "Crear"
                      }, null, 8, ["onClick"]),
                      createVNode(_component_q_btn, {
                        flat: "",
                        onClick: ($event) => step.value = 1,
                        color: "primary",
                        label: "Regresar",
                        class: "q-ml-sm"
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["done"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="q-mt-lg q-mx-sm flex justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/access/login",
        class: "q-ml-md text-white no-decoration"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-CQbWfExi.mjs.map
