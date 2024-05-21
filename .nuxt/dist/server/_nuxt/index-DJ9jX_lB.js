import { mergeProps, withCtx, createVNode, createTextVNode, withDirectives, openBlock, createBlock, useSSRContext, defineComponent, ref, computed, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0 from "quasar/src/components/card/QCardSection.js";
import __nuxt_component_1 from "quasar/src/components/card/QCard.js";
import __nuxt_component_2$1 from "quasar/src/components/item/QItemSection.js";
import __nuxt_component_3 from "quasar/src/components/img/QImg.js";
import __nuxt_component_4 from "quasar/src/components/item/QItemLabel.js";
import __nuxt_component_4$1 from "quasar/src/components/icon/QIcon.js";
import __nuxt_component_1$1 from "quasar/src/components/btn/QBtn.js";
import __nuxt_component_7 from "quasar/src/components/badge/QBadge.js";
import __nuxt_component_8 from "quasar/src/components/tooltip/QTooltip.js";
import __nuxt_component_9 from "quasar/src/components/linear-progress/QLinearProgress.js";
import __q_directive_0 from "quasar/src/directives/ripple/Ripple.js";
import __nuxt_component_0$1 from "quasar/src/components/carousel/QCarousel.js";
import __nuxt_component_1$2 from "quasar/src/components/carousel/QCarouselSlide.js";
import __nuxt_component_0$2 from "quasar/src/components/input/QInput.js";
import __nuxt_component_0$3 from "quasar/src/components/page/QPage.js";
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
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_q_card_section = __nuxt_component_0;
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
      const _component_q_card_section = __nuxt_component_0;
      const _component_q_icon = __nuxt_component_4$1;
      _push(`<!--[--><section class="q-pt-xl" style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "1fr 50px", "max-width": "400px", "margin": "10px auto", "gap": "2px" })}">`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: text.value,
        "onUpdate:modelValue": ($event) => text.value = $event,
        type: "text",
        label: "Buscar compañías",
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
export {
  index as default
};
//# sourceMappingURL=index-DJ9jX_lB.js.map
