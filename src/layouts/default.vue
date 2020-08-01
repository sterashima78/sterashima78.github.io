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
          <v-img src="https://avatars2.githubusercontent.com/u/45279563" />
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
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/blog/">
          <v-list-item-icon>
            <v-icon>mdi-post</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about/">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/components/">
          <v-list-item-icon>
            <v-icon>mdi-code</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>components</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="margin-bottom: 300px;">
        <nuxt />
      </v-container>
      <v-footer
        absolute
        :style="{ 'margin-bottom': isXSmall ? '62px' : '0px' }"
        style="padding: 0;"
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
              <img style="width: auto; height: 24px;" src="/qiita.png" />
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0 d-md-none">
            <v-list>
              <v-list-item>
                <img
                  src="https://avatars2.githubusercontent.com/u/45279563"
                  style="width: auto; height: 54px;"
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
    </v-main>
    <v-footer
      v-if="isXSmall"
      fixed
      style="display: flex; justify-content: space-around;"
    >
      <nuxt-link to="/" style="text-align: center;">
        <v-icon>mdi-home</v-icon><br />
        <span style="color: black;">Home</span>
      </nuxt-link>
      <nuxt-link to="/blog/" style="text-align: center;">
        <v-icon>mdi-post</v-icon><br />
        <span style="color: black;">Blog</span>
      </nuxt-link>
      <nuxt-link to="/about/" style="text-align: center;">
        <v-icon>mdi-account</v-icon><br />
        <span style="color: black;">About</span>
      </nuxt-link>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    isSmall: false,
    isXSmall: false,
  }),
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.isSmall = window.innerWidth <= 960
      this.isXSmall = window.innerWidth <= 600
    },
  },
})
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
