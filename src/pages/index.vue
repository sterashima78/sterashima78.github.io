<template>
  <div :class="$style['home-wrapper']">
    <h1 :class="$style['title']">
      <t-avatar size="128px" :lazy="false" />
      <p :class="$style['main']">sterashima78</p>
      <p :class="$style['sub']">Frontend Engineer</p>
    </h1>
    <div :class="$style['section']">
      <t-icon-link link="/blog/" :icon="mdiPost" title="blog">Blog</t-icon-link>
      <t-icon-link link="/about/" :icon="mdiAccount" title="about"
        >About</t-icon-link
      >
    </div>
    <div :class="$style['section']">
      <t-icon-link
        title="link to github"
        link="https://github.com/sterashima78"
        :icon="mdiGithub"
      />
      <t-img-link
        :lazy="false"
        height="24px"
        width="63px"
        title="qiita"
        alt="qiita"
        link="https://qiita.com/sterashima78"
        img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,w_63,h_24/v1596864705/blog/qiita.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub } from '@mdi/js'
import { hydrateSsrOnly } from 'vue-lazy-hydration'
import Vue from 'vue'
export default Vue.extend({
  // @ts-ignore
  ampLayout: 'default.amp',
  // @ts-ignore
  amp: 'only',
  layout: 'plain',
  components: {
    TImgLink: hydrateSsrOnly(() => import('~/components/TImgLink.vue')),
    TIconLink: hydrateSsrOnly(() => import('~/components/TIconLink.vue')),
    TAvatar: hydrateSsrOnly(() => import('~/components/TAvatar.vue')),
  },
  data() {
    return {
      mdiPost,
      mdiAccount,
      mdiGithub,
    }
  },
})
</script>
<style module lang="scss">
.home-wrapper {
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply flex-col;
  @apply h-full;
  @apply flex-grow;
}
.section {
  @apply mt-4;
  @apply flex;
  @apply content-center;
  @apply justify-center;
}
.title {
  @apply text-center;
  @apply leading-none;
}
.main {
  @apply font-bold;
  @apply mb-1;
  @apply text-xl;
}
.sub {
  @apply text-sm;
}
</style>
