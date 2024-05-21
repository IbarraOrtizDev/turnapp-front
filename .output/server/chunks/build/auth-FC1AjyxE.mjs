import { computed, h, mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { g as createComponent, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from '../_/QLayout.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_0$1 } from '../_/QCard.mjs';
import { d as useSizeProps, e as useSize, _ as __nuxt_component_4$1, f as hMergeSlotSafely } from '../_/use-dark.mjs';
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
import '../_/scroll.mjs';

const __nuxt_component_3 = createComponent({
  name: 'QAvatar',

  props: {
    ...useSizeProps,

    fontSize: String,

    color: String,
    textColor: String,

    icon: String,
    square: Boolean,
    rounded: Boolean
  },

  setup (props, { slots }) {
    const sizeStyle = useSize(props);

    const classes = computed(() =>
      'q-avatar'
      + (props.color ? ` bg-${ props.color }` : '')
      + (props.textColor ? ` text-${ props.textColor } q-chip--colored` : '')
      + (
        props.square === true
          ? ' q-avatar--square'
          : (props.rounded === true ? ' rounded-borders' : '')
      )
    );

    const contentStyle = computed(() => (
      props.fontSize
        ? { fontSize: props.fontSize }
        : null
    ));

    return () => {
      const icon = props.icon !== void 0
        ? [ h(__nuxt_component_4$1, { name: props.icon }) ]
        : void 0;

      return h('div', {
        class: classes.value,
        style: sizeStyle.value
      }, [
        h('div', {
          class: 'q-avatar__content row flex-center overflow-hidden',
          style: contentStyle.value
        }, hMergeSlotSafely(slots.default, icon))
      ])
    }
  }
});

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_layout = __nuxt_component_0;
  const _component_q_card = __nuxt_component_1;
  const _component_q_card_section = __nuxt_component_0$1;
  const _component_q_avatar = __nuxt_component_3;
  const _component_q_icon = __nuxt_component_4$1;
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

export { auth as default };
//# sourceMappingURL=auth-FC1AjyxE.mjs.map
