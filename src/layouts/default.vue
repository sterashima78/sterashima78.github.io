<template>
  <div class="flex min-h-screen">
    <div class="hidden sm:flex flex-col border-r-2 sm:w-16 md:w-64">
      <div class="m-4 hidden md:flex items-center text-black">
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
            <span class="text-black md:inline-block pl-3 sm:hidden">Home</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/blog/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiPost" />
            </svg>
            <span class="text-black md:inline-block pl-3 sm:hidden">Blog</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/about/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiAccount" />
            </svg>
            <span class="text-black md:inline-block pl-3 sm:hidden">About</span>
          </div>
        </nuxt-link>
        <!-- <nuxt-link to="/components/" class="block p-4 m-0 hover:bg-gray-200">
          <div class="flex content-center">
            <svg height="24px" width="24px">
              <path :d="mdiCodeTags" />
            </svg>
            <span class="text-black md:inline-block pl-3 sm:hidden"
              >Components</span
            >
          </div>
        </nuxt-link> -->
      </div>
    </div>

    <main class="flex-grow flex flex-col justify-between overflow-x-hidden">
      <div class="p-2">
        <nuxt />
      </div>
      <div class="p-0 w-100 mb-16 sm:mb-0">
        <div class="w-100 text-white bg-indigo-600 text-center">
          <div class="flex content-center justify-center p-2 pt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sterashima78"
              class="bg-white"
              title="github"
            >
              <span role="img">
                <svg height="24px" width="24px">
                  <path :d="mdiGithub" />
                </svg>
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://qiita.com/sterashima78"
              target="_blank"
              class="block"
            >
              <img
                alt="qiita"
                height="24"
                width="63"
                src="https://res.cloudinary.com/sterashima78/image/upload/c_scale,w_63,h_24/v1596864705/blog/qiita.png"
              />
            </a>
          </div>

          <div class="m-4 md:hidden flex items-center bg-gray-100 text-black">
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
      class="fixed bottom-0 w-full flex justify-around sm:hidden p-2 bg-gray-300 z-50"
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
      <!-- <nuxt-link
        to="/components/"
        style="text-align: center;"
        class="inline-block"
      >
        <div class="flex content-center flex-col justify-center text-center">
          <div class="flex justify-center">
            <svg height="24px" width="24px">
              <path :d="mdiCodeTags" />
            </svg>
          </div>
          <span class="text-black">Components</span>
        </div>
      </nuxt-link> -->
    </div>
  </div>
</template>
<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub, mdiHome, mdiCodeTags } from '@mdi/js'

import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    mdiHome,
    mdiPost,
    mdiAccount,
    mdiGithub,
    mdiCodeTags,
  }),
})
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
main {
  max-width: 100vw;
  @media (min-width: 640px) {
    max-width: calc(100vw - 5em);
  }
  @media (min-width: 768px) {
    max-width: calc(100vw - 16em);
  }
}
</style>
