<template>
  <div class="blog-main">
    <h1 class="text-3xl font-bold"><slot>Blog</slot></h1>
    <div class="container">
      <BlogItem
        v-for="post in posts"
        :key="post.id"
        class="blog-item"
        :post="post"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import BlogItem from './BlogItem.vue'
export default Vue.extend({
  components: {
    BlogItem,
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
<style lang="scss" scoped>
.blog-main {
  width: 100%;
  height: 100%;

  > .container {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.blog-item {
  margin-bottom: 15px;
}
</style>
