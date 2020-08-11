<template>
  <div>
    <h1>About me</h1>
    <div class="avatar">
      <t-avatar size="64px" />
      <div class="name-wrapper">
        <p class="main">sterashima78</p>
        <p class="sub">Frontend Engineer</p>
      </div>
    </div>
    <h2>スキル</h2>
    <p>言語もライブラリもツールもごちゃまぜ</p>
    <div style="height: 70vh;" class="m-2">
      <TechGraph />
    </div>
    <h2>作ったもの</h2>
    <div class="flex flex-wrap justify-center">
      <PortfolioItem
        v-for="a in product"
        :key="a.name"
        :link="a.link"
        :img-src="a.src"
        >{{ a.name }}</PortfolioItem
      >
    </div>
    <h2>経歴</h2>
    <t-timeline :timelines="career"></t-timeline>
  </div>
</template>

<script>
import Vue from 'vue'
import PortfolioItem from '../components/PortfolioItem.vue'
import TechGraph from '../components/TechGraph.vue'
export default Vue.extend({
  components: {
    PortfolioItem,
    TechGraph,
    TTimeline: () => import('../components/global/TTImeline/index'),
  },
  metaInfo: {
    title: 'About me',
  },
  asyncData({ $content }) {
    return $content('about').fetch()
  },
})
</script>
<style lang="scss" scoped>
h1 {
  @apply text-3xl;
  @apply font-bold;
}
h2 {
  @apply my-2;
  @apply text-2xl;
  @apply font-bold;
}
.avatar {
  @apply flex;
  @apply content-center;

  > .name-wrapper {
    @apply flex;
    @apply flex-col;
    @apply content-center;
    @apply justify-center;
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
