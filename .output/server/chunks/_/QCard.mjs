import { computed, h, getCurrentInstance } from 'vue';
import { g as createComponent } from '../build/server.mjs';
import { b as hSlot, u as useDarkProps, a as useDark } from './use-dark.mjs';

const __nuxt_component_0$1 = createComponent({
  name: 'QCardSection',

  props: {
    tag: {
      type: String,
      default: 'div'
    },

    horizontal: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-card__section'
      + ` q-card__section--${ props.horizontal === true ? 'horiz row no-wrap' : 'vert' }`
    );

    return () => h(props.tag, { class: classes.value }, hSlot(slots.default))
  }
});

const __nuxt_component_1 = createComponent({
  name: 'QCard',

  props: {
    ...useDarkProps,

    tag: {
      type: String,
      default: 'div'
    },

    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);

    const classes = computed(() =>
      'q-card'
      + (isDark.value === true ? ' q-card--dark q-dark' : '')
      + (props.bordered === true ? ' q-card--bordered' : '')
      + (props.square === true ? ' q-card--square no-border-radius' : '')
      + (props.flat === true ? ' q-card--flat no-shadow' : '')
    );

    return () => h(props.tag, { class: classes.value }, hSlot(slots.default))
  }
});

export { __nuxt_component_1 as _, __nuxt_component_0$1 as a };
//# sourceMappingURL=QCard.mjs.map