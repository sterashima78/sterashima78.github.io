<template>
  <v-app>
    <v-navigation-drawer app permanent class="sideber">
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

    <v-app-bar app class="header">
      <!-- -->
    </v-app-bar>

    <v-content>
      <!-- your code here -->
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
    <v-footer app>
    <!-- -->
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>