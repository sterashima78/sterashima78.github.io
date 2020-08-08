<template>
  <div class="flex justify-center items-center flex-col h-full flex-grow">
    <div
      class="rounded-full border-grey border m-2 bg-contain bg-center avatar"
    ></div>
    <h1 class="text-center">
      <p class="font-bold leading-none mb-1 text-xl">sterashima78</p>
      <p class="leading-none text-sm">Frontend Engineer</p>
    </h1>
    <div class="mt-4">
      <div class="flex content-center justify-center">
        <nuxt-link to="/blog/">
          <div class="flex content-center flex-col justify-center text-center">
            <div class="flex justify-center">
              <svg height="24px" width="24px">
                <path :d="mdiPost" />
              </svg>
            </div>
            <span>Blog</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/about/">
          <div class="flex content-center flex-col justify-center text-center">
            <div class="flex justify-center">
              <svg height="24px" width="24px">
                <path :d="mdiAccount" />
              </svg>
            </div>
            <span>About</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex content-center justify-center">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/sterashima78"
          title="link to github"
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
          <img height="24" width="64" alt="qiita" src="/qiita.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  layout: 'plain',
  asyncData() {
    return {
      mdiPost,
      mdiAccount,
      mdiGithub,
    }
  },
})
</script>
<style>
.avatar {
  height: 128px;
  width: 128px;
  background-image: url(https://avatars2.githubusercontent.com/u/45279563);
}
a {
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>
