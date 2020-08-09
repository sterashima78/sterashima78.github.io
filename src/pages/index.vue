<template>
  <div class="home-wrapper">
    <h1 class="title">
      <t-avatar size="128px" />
      <p class="main">sterashima78</p>
      <p class="sub">Frontend Engineer</p>
    </h1>
    <div class="section">
      <t-icon-link to="/blog/" :icon="mdiPost">Blog</t-icon-link>
      <t-icon-link to="/about/" :icon="mdiAccount">About</t-icon-link>
    </div>
    <div class="section">
      <t-icon-link
        title="link to github"
        link="https://github.com/sterashima78"
        :icon="mdiGithub"
      />
      <t-img-link
        height="24px"
        width="63px"
        alt="qiita"
        link="https://qiita.com/sterashima78"
        img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,w_63,h_24/v1596864705/blog/qiita.png"
      />
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
<style lang="scss" scoped>
.home-wrapper {
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply flex-col;
  @apply h-full;
  @apply flex-grow;
  > .section {
    @apply mt-4;
    @apply flex;
    @apply content-center;
    @apply justify-center;
  }
  > .title {
    @apply text-center;
    @apply leading-none;
    > .main {
      @apply font-bold;
      @apply mb-1;
      @apply text-xl;
    }
    > .sub {
      @apply text-sm;
    }
  }
}
</style>
