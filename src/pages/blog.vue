<template>
  <Layout>
    <BlogMain :posts="$page.allBlogPost.edges.map(({ node }) => node)" />
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
          tags {
            title
          },
          path,
          image
        }
      }
    }
  }
</page-query>

<script>
import BlogMain from "../components/Blog/BlogMain";
export default {
  components: {
    BlogMain,
  },
};
</script>
