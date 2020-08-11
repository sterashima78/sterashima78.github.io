<template>
  <nuxt-link
    :to="post.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
    class="post-item"
    style="width: 20em; height: 340px;"
  >
    <div class="rounded border-black shadow card">
      <div class="relative bg-no-repeat bg-center" :style="style">
        <h2
          class="absolute bottom-0 inset-x-0 font-bold text-xl text-white leading-relaxed bg-black bg-opacity-75 p-2"
          v-text="post.title"
        />
      </div>
      <div class="m-2">
        <t-chip
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog/tags/${tag}`"
          class="bg-teal-700 text-white"
          v-text="tag"
        />
      </div>
      <div class="p-2">
        <p>{{ post.description }}</p>
        <small>{{ post.date }}</small>
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    post: {
      // eslint-disable-next-line
      type: Object as PropType<any>,
      // eslint-disable-next-line
      default: (): any => ({}),
    },
  },
  data() {
    return {
      loaded: false,
      ext: 'png',
    }
  },
  computed: {
    style(): any {
      const bg = this.loaded
        ? { 'background-image': `url(${this.post.image}.${this.ext})` }
        : {}
      return {
        height: '200px',
        ...bg,
      }
    },
  },
  mounted() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loaded = true
          io.unobserve(entry.target)
        }
      })
    })
    io.observe(this.$el)
  },
})
</script>
<style lang="scss" scoped>
.post-item {
  text-decoration: none;
  color: black;
}
</style>
