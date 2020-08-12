<template>
  <div :class="$style.main">
    <h1 :class="$style.title"><slot>Blog</slot></h1>
    <div :class="$style.container">
      <BlogItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  components: {
    BlogItem: () => import('./BlogItem.vue'),
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
