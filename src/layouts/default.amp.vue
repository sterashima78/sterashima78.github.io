<template>
  <div :class="$style.wrap">
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" module>
.wrap {
  @apply min-h-screen;
  @apply h-screen;
}
</style>
