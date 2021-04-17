<template>
  <aside :class="$style.sidebar">
    <div :class="$style.avatar">
      <t-avatar :lazy="false" size="64px" />
      <div>
        <p :class="$style['avatar-main']">sterashima78</p>
        <p :class="$style['avatar-sub']">Web Frontend Engineer</p>
      </div>
    </div>

    <hr />
    <div>
      <nuxt-link to="/" :class="$style.link">
        <svg height="24px" width="24px">
          <path :d="mdiHome" />
        </svg>
        <span :class="$style['link-text']">Home</span>
      </nuxt-link>
      <nuxt-link to="/blog/" :class="$style.link">
        <svg height="24px" width="24px">
          <path :d="mdiPost" />
        </svg>
        <span :class="$style['link-text']">Blog</span>
      </nuxt-link>
      <nuxt-link to="/about/" :class="$style.link">
        <svg height="24px" width="24px">
          <path :d="mdiAccount" />
        </svg>
        <span :class="$style['link-text']">About</span>
      </nuxt-link>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiPost, mdiAccount, mdiGithub, mdiHome } from '@mdi/js'
import { hydrateSsrOnly } from 'vue-lazy-hydration'
export default defineComponent({
  name: 'TSidebar',
  components: {
    TAvatar: hydrateSsrOnly(() => import('~/components/TAvatar.vue')),
  },
  setup() {
    return {
      mdiPost,
      mdiAccount,
      mdiGithub,
      mdiHome,
    }
  },
})
</script>
<style lang="scss" module>
.sidebar {
  @apply flex-col;
  @apply border-r-2;
  @apply hidden;
}

.avatar {
  @apply m-4;
  @apply items-center;
  @apply text-black;
  @apply hidden;
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

.link {
  @apply flex;
  @apply content-center;
  @apply p-4;
  @apply m-0;
  &:hover {
    @apply bg-gray-200;
  }
  &-text {
    @apply text-black;
    @apply pl-3;
  }
}

@screen sm {
  .sidebar {
    @apply w-16;
    @apply flex;
  }
  .link {
    &-text {
      @apply hidden;
    }
  }
}
@screen md {
  .sidebar {
    @apply w-64;
  }
  .avatar {
    @apply flex;
  }
  .link {
    &-text {
      @apply inline-block;
    }
  }
}
</style>
