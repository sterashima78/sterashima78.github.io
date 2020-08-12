<template>
  <div>
    <h1 :class="$style.h1">About me</h1>
    <div :class="$style.avatar">
      <LazyHydrate ssr-only>
        <t-avatar size="64px" />
      </LazyHydrate>
      <div :class="$style.wrapper">
        <p :class="$style.main">sterashima78</p>
        <p :class="$style.sub">Frontend Engineer</p>
      </div>
    </div>
    <h2 :class="$style.h2">スキル</h2>
    <p>言語もライブラリもツールもごちゃまぜ</p>
    <div :class="$style.graph_wrapper">
      <LazyHydrate ssr-only>
        <TechGraph :items="techs" />
      </LazyHydrate>
    </div>
    <h2 :class="$style.h2">作ったもの</h2>
    <div :class="$style.item_wrapper">
      <LazyHydrate when-visible>
        <PortfolioItem
          v-for="a in product"
          :key="a.name"
          :link="a.link"
          :img-src="a.src"
          :title="a.name"
        />
      </LazyHydrate>
    </div>
    <h2 :class="$style.h2">経歴</h2>
    <LazyHydrate ssr-only>
      <t-timeline :timelines="career"></t-timeline>
    </LazyHydrate>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  components: {
    PortfolioItem: () => import('../components/PortfolioItem.vue'),
    TechGraph: () => import('../components/TechGraph.vue'),
    TTimeline: () => import('../components/global/TTImeline/index'),
    LazyHydrate: () => import('vue-lazy-hydration'),
  },
  metaInfo: {
    title: 'About me',
  },
  asyncData({ $content }) {
    return $content('about').fetch()
  },
})
</script>
<style lang="scss" module>
.h1 {
  @apply text-3xl;
  @apply font-bold;
}
.h2 {
  @apply my-2;
  @apply text-2xl;
  @apply font-bold;
}
.avatar {
  @apply flex;
  @apply content-center;
}
.wrapper {
  @apply flex;
  @apply flex-col;
  @apply content-center;
  @apply justify-center;
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
.item_wrapper {
  @apply flex;
  @apply flex-wrap;
  @apply justify-center;
}
.graph_wrapper {
  height: 70vh;
  @apply m-2;
}
</style>
