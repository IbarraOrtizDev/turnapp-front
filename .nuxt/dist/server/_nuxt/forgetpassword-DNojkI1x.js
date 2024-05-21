import { ref, unref, isRef, useSSRContext } from "vue";
import { a as useRouter } from "../server.mjs";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import useQuasar from "quasar/src/composables/use-quasar/use-quasar.js";
import __nuxt_component_0 from "quasar/src/components/input/QInput.js";
import __nuxt_component_1 from "quasar/src/components/btn/QBtn.js";
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
const _sfc_main = {
  __name: "forgetpassword",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const $q = useQuasar();
    const recoverPassword = () => {
      $q.notify({
        color: "primary",
        position: "top",
        message: "Recuperando contraseña, por favor revise su correo electrónico",
        icon: "email"
      });
      console.log(email.value);
    };
    const cancel = () => {
      const router = useRouter();
      router.push("/access/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_input = __nuxt_component_0;
      const _component_q_btn = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "bg-white",
        style: { "border-radius": "5px" },
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        label: "Email",
        outlined: ""
      }, null, _parent));
      _push(`</div><div class="flex justify-end q-mt-md flex-col gap-1">`);
      _push(ssrRenderComponent(_component_q_btn, {
        label: "Regresar",
        flat: "",
        onClick: cancel,
        color: "white"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        label: "Recuperar",
        onClick: recoverPassword,
        class: "",
        color: "primary"
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/access/forgetpassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgetpassword-DNojkI1x.js.map
