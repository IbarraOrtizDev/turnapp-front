import { useSSRContext } from "vue";
import "hookable";
import { b as useRoute, a as useRouter } from "../server.mjs";
import { ssrRenderAttrs } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    if (router.currentRoute.value.path === "/access/" || router.currentRoute.value.path === "/access") {
      router.push("/access/login");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B1KmTKz8.js.map
