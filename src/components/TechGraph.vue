<template>
  <div :class="$style.wrap">
    <span :class="[$style.label, $style['label-x']]" v-text="'好き'" />
    <span :class="[$style.label, $style['label-y']]" v-text="'得意'" />
    <div :class="[$style.axis, $style['axis-x']]" />
    <div :class="[$style.axis, $style['axis-y']]" />
    <t-chip
      v-for="item in items"
      :key="item.text"
      :class="$style.mark"
      :style="{ left: `${item.x}%`, top: `${100 - item.y}%` }"
      >{{ item.text }}</t-chip
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { PropType } from '@nuxtjs/composition-api'
export default Vue.extend({
  components: {
    TChip: () => import('~/components/TChip.vue'),
  },
  props: {
    items: {
      type: Array as PropType<{ x: number; y: number; text: string }[]>,
      default: () => [],
    },
  },
})
</script>
<style lang="scss" module>
.wrap {
  @apply w-full;
  @apply h-full;
  @apply relative;
  @apply border-black;

  border-width: 1px;
}
.mark {
  @apply absolute;
  @apply text-xs;
  @apply bg-green-700;
  @apply text-white;
}
.axis {
  @apply absolute;
  @apply border-black;

  border-width: 1px;
  left: calc(50% - 2px);
  top: calc(50% - 2px);

  &-x {
    @apply w-full;
    @apply left-0;
  }
  &-y {
    @apply h-full;
    @apply top-0;
  }
}

.label {
  @apply absolute;
  @apply z-50;

  &-x {
    right: 0;
    top: calc(50% - 1.5em);
  }
  &-y {
    left: calc(50% - 2.5em);
    top: 0;
  }
}
</style>
