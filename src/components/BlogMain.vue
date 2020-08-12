<template>
  <div :class="$style.main">
    <h1 :class="$style.title"><slot>Blog</slot></h1>
    <div :class="$style.container">
      <template v-for="(post, index) in posts">
        <LazyHydrate v-if="index <= 1" :key="post.id" ssr-only>
          <BlogItem :post="post" />
        </LazyHydrate>
        <LazyHydrate v-else :key="post.id" when-visible>
          <BlogItem :post="post" />
        </LazyHydrate>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import LazyHydrate from 'vue-lazy-hydration'
export default Vue.extend({
  components: {
    BlogItem: () => import('./BlogItem.vue'),
    LazyHydrate,
  },
  props: {
    posts: {
      // eslint-disable-next-line
      type: Array as PropType<any[]>,
      // eslint-disable-next-line
      default: (): any[] => [],
    },
  },
})
</script>
<style lang="scss" module>
.main {
  @apply w-full;
  @apply h-full;
}
.title {
  @apply text-3xl;
  @apply font-bold;
}
.container {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
