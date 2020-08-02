<template>
  <nuxt-link
    :to="post.path.replace(/\//g, '-').replace('-blog-', '/blog/')"
    class="post-item"
  >
    <div class="rounded border-black shadow card">
      <div class="relative bg-no-repeat bg-center bg-cover" :style="style">
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
          color="teal"
          text-color="white"
          v-text="tag"
        />
      </div>
      <div class="p-2">
        <p>{{ post.description }}</p>
        <small class="date">{{ post.date }}</small>
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
  computed: {
    style(): any {
      return {
        height: '200px',
        'background-image': `url(${this.post.image})`,
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.post-item {
  text-decoration: none;
  color: black;
  > .card {
    width: 20rem;
    max-width: 20rem;
  }
}
.date {
  color: grey;
}
</style>
