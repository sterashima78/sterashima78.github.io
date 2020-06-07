<template>
  <Layout>
    <v-img :src="$page.blogPost.image" style="height: 15em">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" style="color:white;background: rgba(0 ,0, 0, 0.5)">
          <h1 class="display-1 font-weight-thin mb-4" >
            {{ $page.blogPost.title }}
          </h1>
          <h4 class="subheading">
            {{ $page.blogPost.description }}, {{ $page.blogPost.date }}
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <div class="content" v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  blogPost (path: $path) {
    title
    date (format: "YYYY年MM月DD日 HH:mm:ss")
    content,
    image,
    description
  }
}
</page-query>

<script>
export default {};
</script>
