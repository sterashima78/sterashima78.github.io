<template>
  <v-card class="portfolio-item" :href="link" hover>
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
    link: {
      type: String as PropType<string>,
      default: "",
    },
    imgSrc: {
      type: String as PropType<string>,
      default: "",
    },
  },
  // methods: {
  //   link(href: string) {
  //     console.log(this.href, href)
  //     window.open(href)
  //   }
  // }
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
