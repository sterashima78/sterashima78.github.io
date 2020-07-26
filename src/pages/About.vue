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
      <h2>作ったもの</h2>
      <div class="d-flex flex-wrap justify-center">
        <PortfolioItem
          link="https://github.com/sterashima78/vue-webpage-builder"
          img-src="https://raw.githubusercontent.com/sterashima78/vue-webpage-builder/master/docs/.vuepress/public/logo.png"
        >
          Vue Webpage Builder
        </PortfolioItem>
        <PortfolioItem
          link="https://github.com/sterashima78/vue3-minesweeper"
          img-src="https://user-images.githubusercontent.com/45279563/83960403-6bddab80-a8c3-11ea-80b9-942cec38d6d7.gif"
        >
          Vue 3 マインスイーパ
        </PortfolioItem>
        <PortfolioItem
          link="https://github.com/sterashima78/atcoder-f-sharp"
          img-src="https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png"
        >
          F# で解いた AtCoder
        </PortfolioItem>
      </div>
      <h2>資格</h2>
      <v-timeline align-top dense>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2019/04</v-card-title>
            <v-card-text>情報処理安全確保支援士</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2018/04</v-card-title>
            <v-card-text>データベーススペシャリスト</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2018/03</v-card-title>
            <v-card-text>LPIC2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/10</v-card-title>
            <v-card-text>ネットワークスペシャリスト</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/07</v-card-title>
            <v-card-text>LPIC1</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/04</v-card-title>
            <v-card-text>応用情報技術者</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2016/10</v-card-title>
            <v-card-text>基本情報技術者</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </Layout>
</template>

<script>
import PortfolioItem from "../components/About/PortfolioItem.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    PortfolioItem,
  },
  metaInfo: {
    title: "About me",
  },
});
</script>
<style lang="scss" scoped>
h2 {
  margin: 10px;
}
</style>
