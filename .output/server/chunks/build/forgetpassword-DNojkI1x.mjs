import { ref, unref, isRef, useSSRContext } from 'vue';
import { u as useQuasar, a as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from '../_/QInput.mjs';
import { _ as __nuxt_component_1$1 } from '../_/focus-manager.mjs';
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
import '../_/use-dark.mjs';

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
        message: "Recuperando contrase\xF1a, por favor revise su correo electr\xF3nico",
        icon: "email"
      });
      console.log(email.value);
    };
    const cancel = () => {
      const router = useRouter();
      router.push("/access/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_input = __nuxt_component_0$2;
      const _component_q_btn = __nuxt_component_1$1;
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

export { _sfc_main as default };
//# sourceMappingURL=forgetpassword-DNojkI1x.mjs.map
