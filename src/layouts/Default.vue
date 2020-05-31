<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer
      :app="!isXSmall"
      permanent
      class="d-none d-sm-flex"
      :mini-variant="isSmall"
    >
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

      <v-divider></v-divider>
      <v-list dense>
        <g-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </g-link>
      </v-list>
      <v-list dense>
        <g-link to="/blog/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-post</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </g-link>
      </v-list>
      <v-list dense>
        <g-link to="/about/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </g-link>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- your code here -->
      <v-container fluid>
        <slot />
      </v-container>
      <v-footer
        absolute
        :style="{ 'margin-bottom': isXSmall ? '62px' : '0px' }"
        style="padding: 0px;"
      >
        <v-card
          flat
          tile
          style="width: 100%;"
          class="indigo lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              class="mx-4 white--text"
              icon
              target="_blank"
              href="https://github.com/sterashima78"
            >
              <v-icon size="24px">mdi-github</v-icon>
            </v-btn>
            <v-btn
              class="mx-4 white--text"
              href="https://qiita.com/sterashima78"
              text
              target="_blank"
            >
              <g-image style="width: auto;height:24px" src="/qiita.png" />
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0 d-md-none">
            <v-list>
              <v-list-item>
                  <g-image
                    src="https://avatars2.githubusercontent.com/u/45279563"
                    style="width: auto;height:54px"
                  />
                <v-list-item-content>
                  <v-list-item-title class="title"
                    >sterashima78</v-list-item-title
                  >
                  <v-list-item-subtitle>Frontend Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy; 2020 — <strong>Terashima Shin</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-content>
    <v-footer
      fixed
      v-if="isXSmall"
      style="display:flex;justify-content: space-around;"
    >
      <g-link to="/" style="text-align: center;">
        <v-icon>mdi-home</v-icon><br />
        <span style="color:black">Home</span>
      </g-link>
      <g-link to="/blog/" style="text-align: center">
        <v-icon>mdi-post</v-icon><br />
        <span style="color:black">Blog</span>
      </g-link>
      <g-link to="/about/" style="text-align: center">
        <v-icon>mdi-account</v-icon><br />
        <span style="color:black">About</span>
      </g-link>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    isSmall: false,
    isXSmall: false,
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.isSmall = window.innerWidth <= 960;
      this.isXSmall = window.innerWidth <= 600;
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
