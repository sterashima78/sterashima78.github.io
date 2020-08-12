<template>
  <div :class="$style.container">
    <t-sidebar></t-sidebar>

    <main :class="$style.main">
      <div :class="$style.wrapper">
        <nuxt />
      </div>
      <div :class="$style.footer">
        <div :class="$style.links">
          <t-icon-link
            link="https://github.com/sterashima78"
            :icon="mdiGithub"
            title="github"
            :class="$style.link"
          ></t-icon-link>
          <t-img-link
            :class="$style.link"
            height="24px"
            width="63px"
            alt="qiita"
            link="https://qiita.com/sterashima78"
            img="https://res.cloudinary.com/sterashima78/image/upload/c_scale,w_63,h_24/v1596864705/blog/qiita.png"
          />
        </div>

        <div :class="$style.avatar">
          <t-avatar size="64px" />
          <div>
            <p :class="$style['avatar-main']">sterashima78</p>
            <p :class="$style['avatar-sub']">Frontend Engineer</p>
          </div>
        </div>

        <hr />
        <div class="text-white w-full p-2">
          &copy; 2020 — <strong>Terashima Shin</strong>
        </div>
      </div>
    </main>
    <div :class="$style['fix-footer']">
      <t-icon-link to="/" :icon="mdiHome" title="Home">Home</t-icon-link>
      <t-icon-link to="/blog/" :icon="mdiPost" title="Blog">Blog</t-icon-link>
      <t-icon-link to="/about/" :icon="mdiAccount" title="About"
        >About</t-icon-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { mdiPost, mdiAccount, mdiGithub, mdiHome } from '@mdi/js'

import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    mdiHome,
    mdiPost,
    mdiAccount,
    mdiGithub,
  }),
})
</script>
<style lang="scss" module>
.container {
  @apply flex;
  @apply min-h-screen;
}
.main {
  @apply flex-grow;
  @apply flex;
  @apply flex-col;
  @apply justify-between;
  @apply overflow-x-hidden;
}
.wrapper {
  @apply p-2;
}
.fix-footer {
  @apply fixed;
  @apply bottom-0;
  @apply w-full;
  @apply flex;
  @apply justify-around;
  @apply p-2;
  @apply bg-gray-300;
  @apply z-50;
}
.avatar {
  @apply m-4;
  @apply items-center;
  @apply text-black;
  @apply hidden;
  @apply flex;
  @apply bg-gray-100;
  &-main {
    @apply font-bold;
    @apply leading-none;
    @apply mb-1;
    @apply text-xl;
  }
  &-sub {
    @apply leading-none;
    @apply text-sm;
  }
}

.footer {
  @apply text-white;
  @apply bg-indigo-600;
  @apply text-center;
  @apply p-0;
  @apply w-full;
  @apply mb-16;
}

.link {
  @apply bg-white;
  @apply mx-2;
}
.links {
  @apply flex content-center justify-center p-2 pt-4;
}

@screen sm {
  .fix-footer {
    @apply hidden;
  }
  .footer {
    @apply mb-0;
  }
}

@screen md {
  .avatar {
    @apply hidden;
  }
}
</style>
