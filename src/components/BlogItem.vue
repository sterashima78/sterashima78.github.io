<template>
  <t-image-card
    :lazy="lazy"
    :title="post.title"
    :img="post.image"
    :to="post.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
    height="200px"
    width="20em"
  >
    <template #title>
      <h2 v-text="post.title" />
    </template>
    <div :class="$style.contents">
      <div :class="$style.section">
        <t-chip
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog/tags/${tag}`"
          :class="$style.tag"
          v-text="tag"
        />
      </div>
      <div :class="$style.section">
        <p v-text="post.description" />
        <small v-text="post.date" />
      </div>
    </div>
  </t-image-card>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { hydrateSsrOnly, hydrateWhenIdle } from 'vue-lazy-hydration'
export default Vue.extend({
  components: {
    TImageCard: hydrateWhenIdle(() => import('~/components/TImageCard.vue')),
    TChip: hydrateSsrOnly(() => import('~/components/TChip.vue')),
  },
  props: {
    post: {
      // eslint-disable-next-line
      type: Object as PropType<any>,
      // eslint-disable-next-line
      default: (): any => ({}),
    },
    lazy: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
})
</script>
<style lang="scss" module>
.contents {
  width: 20em;
  height: 120px;
}
.section {
  @apply m-2;
}
.tag {
  @apply bg-teal-700;
  @apply text-white;
}
</style>
