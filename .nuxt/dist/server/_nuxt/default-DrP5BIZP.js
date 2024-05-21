import { _ as __nuxt_component_0$1 } from "./nuxt-link-DZ12xbRX.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, withDirectives, openBlock, createBlock, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderSlot } from "vue/server-renderer";
import __nuxt_component_0 from "quasar/src/components/layout/QLayout.js";
import __nuxt_component_1 from "quasar/src/components/header/QHeader.js";
import __nuxt_component_2 from "quasar/src/components/toolbar/QToolbar.js";
import __nuxt_component_1$1 from "quasar/src/components/btn/QBtn.js";
import __nuxt_component_4 from "quasar/src/components/toolbar/QToolbarTitle.js";
import __nuxt_component_5 from "quasar/src/components/menu/QMenu.js";
import __nuxt_component_6 from "quasar/src/components/item/QList.js";
import __nuxt_component_7 from "quasar/src/components/item/QItem.js";
import __nuxt_component_2$1 from "quasar/src/components/item/QItemSection.js";
import __nuxt_component_4$1 from "quasar/src/components/icon/QIcon.js";
import __nuxt_component_10 from "quasar/src/components/drawer/QDrawer.js";
import __nuxt_component_12 from "quasar/src/components/page/QPageContainer.js";
import __q_directive_0 from "quasar/src/directives/ripple/Ripple.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
                  _push3(`<h6 class="q-ma-md"${_scopeId2}>Menú</h6>`);
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
                    createVNode("h6", { class: "q-ma-md" }, "Menú"),
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
                  createVNode("h6", { class: "q-ma-md" }, "Menú"),
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-DrP5BIZP.js.map
