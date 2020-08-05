<template>
  <div class="flex min-h-screen">
    <div
      style="min-width: 256px; max-width: 256px;"
      class="d-none d-sm-flex flex-col border-r-2"
    >
      <div class="m-4 md:none flex items-center text-black">
        <t-avatar size="64px" />
        <div class="text-center">
          <p class="font-bold leading-none mb-1 text-xl">sterashima78</p>
          <p class="leading-none text-sm">Frontend Engineer</p>
        </div>
      </div>

      <hr />
      <div>
        <nuxt-link to="/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiHome" />
            </svg>
            <span class="text-black inline-block pl-3">Home</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/blog/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiPost" />
            </svg>
            <span class="text-black inline-block pl-3">Blog</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/about/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiAccount" />
            </svg>
            <span class="text-black inline-block pl-3">About</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/components/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiCodeTags" />
            </svg>
            <span class="text-black inline-block pl-3">Components</span>
          </div>
        </nuxt-link>
      </div>
    </div>

    <main class="flex-grow flex flex-col justify-between">
      <div class="container">
        <nuxt />
      </div>
      <div class="p-0 w-100">
        <div class="w-100 text-white bg-indigo-500 text-center">
          <div class="flex content-center justify-center p-2 pt-4">
            <a
              icon
              target="_blank"
              href="https://github.com/sterashima78"
              class="bg-white"
            >
              <span role="img">
                <svg height="24px" width="24px">
                  <path :d="mdiGithub" />
                </svg>
              </span>
            </a>
            <a
              href="https://qiita.com/sterashima78"
              target="_blank"
              class="block"
            >
              <img style="width: auto; height: 24px;" src="/qiita.png" />
            </a>
          </div>

          <div
            v-if="isXSmall"
            class="m-4 md:none flex items-center bg-gray-300 text-black"
          >
            <t-avatar size="64px" />
            <div class="text-center">
              <p class="font-bold leading-none mb-1 text-xl">sterashima78</p>
              <p class="leading-none text-sm">Frontend Engineer</p>
            </div>
          </div>

          <hr />
          <div class="text-white w-full p-2">
            &copy; 2020 — <strong>Terashima Shin</strong>
          </div>
        </div>
      </div>
    </main>
    <div
      v-if="isXSmall"
      class="fixed bottom-0 w-full flex justify-around md:hidden p-2 bg-gray-300 z-50"
    >
      <nuxt-link to="/" style="text-align: center;" class="inline-block">
        <div class="flex content-center flex-col justify-center text-center">
          <div class="flex justify-center">
            <svg height="24px" width="24px">
              <path :d="mdiHome" />
            </svg>
          </div>
          <span class="text-black">Home</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/blog/" style="text-align: center;" class="inline-block">
        <div class="flex content-center flex-col justify-center text-center">
          <div class="flex justify-center">
            <svg height="24px" width="24px">
              <path :d="mdiPost" />
            </svg>
          </div>
          <span class="text-black">Blog</span>
        </div>
      </nuxt-link>
      <nuxt-link to="/about/" style="text-align: center;" class="inline-block">
        <div class="flex content-center flex-col justify-center text-center">
          <div class="flex justify-center">
            <svg height="24px" width="24px">
              <path :d="mdiAccount" />
            </svg>
          </div>
          <span class="text-black">About</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub, mdiHome, mdiCodeTags } from '@mdi/js'

import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    isSmall: false,
    isXSmall: false,
    mdiHome,
    mdiPost,
    mdiAccount,
    mdiGithub,
    mdiCodeTags,
  }),
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
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
