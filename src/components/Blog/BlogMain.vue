<template>
  <div class="blog-main">
    <h1>Blog</h1>
    <v-container fluid class="container">
      <BlogItem
        class="blog-item"
        v-for="post in posts"
        :key="post.id"
        :post="post.node"
      />
    </v-container>
  </div>
</template>
<script>
import BlogItem from "./BlogItem";
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    BlogItem,
  },
};
</script>
<style lang="scss" scoped>
.blog-main {
  width: 100%;
  height: 100%;

  > .container {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.blog-item {
  margin: 15px;
}
</style>
