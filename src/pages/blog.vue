<template>
  <Layout>
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>{{ item.node.tags}}</dd>
        </dl>
        <p>{{ item.node.description }}</p>
        <g-link :to="item.node.path" class="continue-link">続きを読む ></g-link>
      </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "YYYY年MM月DD日 HH:mm:ss")
          description
          tags
          path
        }
      }
    }
  }
</page-query>

<script>
  export default {}
</script>