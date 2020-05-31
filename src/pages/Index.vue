<template>
  <v-app>
    <v-flex class="d-flex align-center">
      <v-flex class="d-flex flex-column align-center justify-center">
        <v-avatar class="profile" color="grey" size="128">
          <g-image src="https://avatars2.githubusercontent.com/u/45279563" />
        </v-avatar>
        <v-list style="text-align: center">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">sterashima78</v-list-item-title>
              <v-list-item-subtitle>Frontend Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="d-flex flex-row justify-center">
              <v-flex class="d-flex flex-row justify-center align-center">
                <g-link to="/blog/" style="text-align: center">
                  <v-icon>mdi-post</v-icon><br />
                  <span style="color:black">Blog</span>
                </g-link>
                <g-link to="/about/" style="text-align: center">
                  <v-icon>mdi-account</v-icon><br />
                  <span style="color:black">About</span>
                </g-link>
              </v-flex>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="d-flex flex-row justify-center">
              <v-flex class="d-flex flex-row justify-center align-center">
                <v-btn
                  icon
                  target="_blank"
                  href="https://github.com/sterashima78"
                >
                  <v-icon size="24px">mdi-github</v-icon>
                </v-btn>
                <a href="https://qiita.com/sterashima78" target="_blank">
                  <g-image style="width: auto;height:24px" src="/qiita.png" />
                </a>
              </v-flex>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  metaInfo: {
    title: "Top",
  },
};
</script>

<style>
a {
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>
