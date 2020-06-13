<template>
  <v-card class="portfolio-item" :href="href" hover>
    <g-image class="img" :src="imgSrc" style="width: 15em" />
    <v-card-title>
      <slot />
    </v-card-title>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    href: {
      type: String as PropType<string>,
      default: "",
    },
    imgSrc: {
      type: String as PropType<string>,
      default: "",
    },
  },
});
</script>
<style lang="scss" scoped>
.portfolio-item {
  width: 15em;
  margin: 1em;
  > .img {
    width: 15em;
  }
}
</style>
