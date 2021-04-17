<template>
  <div :class="$style['home-wrapper']">
    <h1 :class="$style['title']">
      <t-avatar size="128px" :lazy="false" />
      <p :class="$style['main']">sterashima78</p>
      <p :class="$style['sub']">Web Frontend Engineer</p>
    </h1>
    <div :class="$style['section']">
      <t-icon-link link="/blog/" :icon="mdiPost" title="blog">Blog</t-icon-link>
      <t-icon-link link="/about/" :icon="mdiAccount" title="about"
        >About</t-icon-link
      >
    </div>
    <div :class="$style.section">
      <t-icon-link
        :class="$style.link"
        title="link to github"
        link="https://github.com/sterashima78"
        :icon="mdiGithub"
      />
      <t-img-link
        :class="$style.link"
        :lazy="false"
        height="24px"
        width="24px"
        title="link to qiita"
        alt="qiita"
        link="https://qiita.com/sterashima78"
        img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,h_24/v1610349329/blog/qiita-favicon.png"
      />
      <t-img-link
        :class="$style.link"
        :lazy="false"
        height="24px"
        width="24px"
        title="link to zenn"
        alt="zenn"
        link="https://zenn.dev/sterashima78"
        img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,h_24/v1610349650/blog/zenn.png"
      />

      <t-img-link
        :class="$style.link"
        :lazy="false"
        height="24px"
        width="28px"
        title="AtCoder"
        alt="AtCoder"
        link="https://atcoder.jp/users/sterashima"
        img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,h_24/v1602382418/blog/atcoder_ktk6r5.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub } from '@mdi/js'
import { hydrateSsrOnly } from 'vue-lazy-hydration'
import Vue from 'vue'
export default Vue.extend({
  components: {
    TImgLink: hydrateSsrOnly(() => import('~/components/TImgLink.vue')),
    TIconLink: hydrateSsrOnly(() => import('~/components/TIconLink.vue')),
    TAvatar: hydrateSsrOnly(() => import('~/components/TAvatar.vue')),
  },
  // @ts-ignore
  ampLayout: 'default.amp',
  // @ts-ignore
  amp: 'only',
  layout: 'plain',
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

.link {
  @apply mx-1;
  @apply p-2;
}
</style>
