<template>
  <div class="blog-main">
    <h1><slot>Blog</slot></h1>
    <v-container fluid class="container">
      <BlogItem
        class="blog-item"
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import BlogItem from "./BlogItem.vue";
export default Vue.extend({
  props: {
    posts: {
      type: Array as PropType<any[]>,
      default: (): any[] => [],
    },
  },
  components: {
    BlogItem,
  },
});
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
