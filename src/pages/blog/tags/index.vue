<template>
  <div>
    <h1 :class="$style.title">Tags</h1>
    <t-chip
      v-for="tag in tags"
      :key="tag"
      :to="`/blog/tags/${tag}`"
      :class="$style.tag"
      v-text="tag"
    />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content('blog', { deep: true }).only(['tags']).fetch()
    const tags = posts
      .flatMap(({ tags }) => tags)
      .filter((v, i, arr) => arr.indexOf(v) === i)
    return {
      tags,
    }
  },
})
</script>
<style lang="scss" module>
.title {
  @apply text-2xl;
  @apply font-bold;
}
.tag {
  @apply bg-green-700;
  @apply text-white;
}
</style>
