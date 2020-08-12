<template>
  <t-image-card
    :title="title"
    :link="link"
    :img="imgSrc"
    width="15em"
    height="15em"
  >
    <template #title>
      <h3 v-text="title" />
    </template>
  </t-image-card>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  components: {
    TImageCard: () => import('~/components/TImageCard.vue'),
  },
  props: {
    link: {
      type: String as PropType<string>,
      default: '',
    },
    imgSrc: {
      type: String as PropType<string>,
      default: '',
    },
    title: {
      type: String as PropType<string>,
      default: '',
    },
  },
})
</script>
