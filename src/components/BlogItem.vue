<template>
  <t-image-card
    v-if="post.type === 'qiita' || post.type === 'zenn'"
    :lazy="lazy"
    :title="post.title"
    :img="`https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/${
      post.type === 'qiita'
        ? 'v1596864705/blog/qiita.png'
        : 'v1602381944/blog/logo_kdbkvg.png'
    }`"
    :link="post.url"
    height="200px"
    width="20em"
  >
    <template #title>
      <span role="heading" aria-level="2" v-text="post.title" />
    </template>
    <div :class="$style.contents">
      <div :class="$style.section">
        <t-chip :class="$style.category" v-text="post.type" />
      </div>
      <div :class="$style.section">
        <small v-text="post.created" />
      </div>
    </div>
  </t-image-card>
  <t-image-card
    v-else
    :lazy="lazy"
    :title="post.title"
    :img="post.image"
    :to="post.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
    height="200px"
    width="20em"
  >
    <template #title>
      <span role="heading" aria-level="2" v-text="post.title" />
    </template>
    <div :class="$style.contents">
      <div :class="$style.section">
        <t-chip :class="$style.category" v-text="'blog'" />
        <t-chip
          v-for="tag in post.tags"
          :key="tag"
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
.category {
  @apply bg-blue-700;
  @apply text-white;
}
</style>
