import { mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0 from "quasar/src/components/layout/QLayout.js";
import __nuxt_component_1 from "quasar/src/components/card/QCard.js";
import __nuxt_component_0$1 from "quasar/src/components/card/QCardSection.js";
import __nuxt_component_3 from "quasar/src/components/avatar/QAvatar.js";
import __nuxt_component_4 from "quasar/src/components/icon/QIcon.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "quasar/lang/en-US.js";
import "quasar/icon-set/material-icons.js";
import "quasar/src/plugins/notify/Notify.js";
import "quasar/src/vue-plugin.js";
import "quasar/src/composables/use-quasar/use-quasar.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_layout = __nuxt_component_0;
  const _component_q_card = __nuxt_component_1;
  const _component_q_card_section = __nuxt_component_0$1;
  const _component_q_avatar = __nuxt_component_3;
  const _component_q_icon = __nuxt_component_4;
  _push(ssrRenderComponent(_component_q_layout, mergeProps({ class: "page-login" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_card, { class: "container" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_q_card_section, { class: "center relative-position" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_q_avatar, {
                      class: "absolute-top avatar",
                      size: "120px",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_q_icon, {
                            name: "account_circle",
                            size: "2em"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_q_icon, {
                              name: "account_circle",
                              size: "2em"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_q_avatar, {
                        class: "absolute-top avatar",
                        size: "120px",
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_q_icon, {
                            name: "account_circle",
                            size: "2em"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_q_card_section, { class: "q-mt-lg" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="q-mt-sm" data-v-d0a57bbc${_scopeId3}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "q-mt-sm" }, [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_q_card_section, { class: "center relative-position" }, {
                  default: withCtx(() => [
                    createVNode(_component_q_avatar, {
                      class: "absolute-top avatar",
                      size: "120px",
                      color: "primary",
                      "text-color": "white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_icon, {
                          name: "account_circle",
                          size: "2em"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_q_card_section, { class: "q-mt-lg" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "q-mt-sm" }, [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ])
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_card, { class: "container" }, {
            default: withCtx(() => [
              createVNode(_component_q_card_section, { class: "center relative-position" }, {
                default: withCtx(() => [
                  createVNode(_component_q_avatar, {
                    class: "absolute-top avatar",
                    size: "120px",
                    color: "primary",
                    "text-color": "white"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_q_icon, {
                        name: "account_circle",
                        size: "2em"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_q_card_section, { class: "q-mt-lg" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "q-mt-sm" }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d0a57bbc"]]);
export {
  auth as default
};
//# sourceMappingURL=auth-FC1AjyxE.js.map
