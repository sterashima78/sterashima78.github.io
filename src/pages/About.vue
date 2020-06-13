<template>
  <Layout>
    <div>
      <h1>About me</h1>
      <div class="d-flex align-center">
        <v-avatar class="profile" color="grey" size="64">
          <g-image src="https://avatars2.githubusercontent.com/u/45279563" />
        </v-avatar>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">sterashima78</v-list-item-title>
              <v-list-item-subtitle>Frontend Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <!-- <h2>スキル</h2>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"
              >Webフロントエンド</v-list-item-title
            >
            <v-list-item-subtitle
              ><v-rating :value="5" large></v-rating
            ></v-list-item-subtitle>
            <v-list-item-title class="title">バックエンド</v-list-item-title>
            <v-list-item-subtitle
              ><v-rating :value="3" large></v-rating
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <h2>作ったもの</h2>
      <div class="d-flex flex-wrap justify-center">
        <PortfolioItem
          herf="https://github.com/sterashima78/vue-webpage-builder"
          img-src="https://raw.githubusercontent.com/sterashima78/vue-webpage-builder/master/docs/.vuepress/public/logo.png"
        >
          Vue Webpage Builder
        </PortfolioItem>
        <PortfolioItem
          herf="https://github.com/sterashima78/vue3-minesweeper"
          img-src="https://user-images.githubusercontent.com/45279563/83960403-6bddab80-a8c3-11ea-80b9-942cec38d6d7.gif"
        >
          Vue 3 マインスイーパ
        </PortfolioItem>
      </div>
    </div>
  </Layout>
</template>

<script>
import PortfolioItem from "../components/About/PortfolioItem.vue";
export default {
  components: {
    PortfolioItem,
  },
  metaInfo: {
    title: "About me",
  },
};
</script>
<style lang="scss" scoped>
h2 {
  margin: 10px;
}
</style>
