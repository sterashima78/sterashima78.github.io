<template>
  <Layout>
    <BlogMain :posts="$page.tag.belongsTo.edges.map(({ node }) => node)">
      Tag: {{ $page.tag.title }}
    </BlogMain>
  </Layout>
</template>

<page-query>
query tag ($id: ID) {
  tag: tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on BlogPost {
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
  }
}
</page-query>

<script lang="ts">
import Vue from "vue";
import BlogMain from "../components/Blog/BlogMain.vue";
export default Vue.extend({
  components: {
    BlogMain,
  },
});
</script>
