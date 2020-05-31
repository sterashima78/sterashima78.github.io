<template>
  <Layout>
    <div style="margin-bottom: 300px">
<h1>About me</h1>
    <div class="d-none d-md-flex align-center">
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
    <h2>スキル</h2>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Webフロントエンド</v-list-item-title>
          <v-list-item-subtitle
            ><v-rating :value="5" large></v-rating
          ></v-list-item-subtitle>
          <v-list-item-title class="title">バックエンド</v-list-item-title>
          <v-list-item-subtitle
            ><v-rating :value="3" large></v-rating
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <h2>作ったもの</h2>
    <v-card style="width: 15em" href="https://github.com/sterashima78/vue-webpage-builder" hover>
      <g-image src="https://raw.githubusercontent.com/sterashima78/vue-webpage-builder/master/docs/.vuepress/public/logo.png" style="width: 15em" />
      <v-card-title>
        Vue Webpage Builder
      </v-card-title>
    </v-card>
    </div>
  </Layout>
</template>

<script>
export default {
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
