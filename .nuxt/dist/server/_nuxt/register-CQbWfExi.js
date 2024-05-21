import { _ as __nuxt_component_0$2 } from "./nuxt-link-DZ12xbRX.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import __nuxt_component_0 from "quasar/src/components/stepper/QStepper.js";
import __nuxt_component_1 from "quasar/src/components/stepper/QStep.js";
import __nuxt_component_0$1 from "quasar/src/components/input/QInput.js";
import __nuxt_component_3 from "quasar/src/components/stepper/QStepperNavigation.js";
import __nuxt_component_1$1 from "quasar/src/components/btn/QBtn.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "quasar/lang/en-US.js";
import "quasar/icon-set/material-icons.js";
import "quasar/src/plugins/notify/Notify.js";
import "quasar/src/vue-plugin.js";
import "quasar/src/composables/use-quasar/use-quasar.js";
const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_stepper = __nuxt_component_0;
      const _component_q_step = __nuxt_component_1;
      const _component_q_input = __nuxt_component_0$1;
      const _component_q_stepper_navigation = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$2;
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
                    label: "Correo electrónico *",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    label: "Contraseña *",
                    type: "password",
                    class: "q-my-md"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.confirmPassword,
                    "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                    label: "Confirmar contraseña *",
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
                      label: "Correo electrónico *",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      label: "Contraseña *",
                      type: "password",
                      class: "q-my-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_input, {
                      outlined: "",
                      modelValue: _ctx.confirmPassword,
                      "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                      label: "Confirmar contraseña *",
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
                    label: "Correo electrónico *",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    label: "Contraseña *",
                    type: "password",
                    class: "q-my-md"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_q_input, {
                    outlined: "",
                    modelValue: _ctx.confirmPassword,
                    "onUpdate:modelValue": ($event) => _ctx.confirmPassword = $event,
                    label: "Confirmar contraseña *",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=register-CQbWfExi.js.map
