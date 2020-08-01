<template>
  <nuxt-link :to="post.path" class="post-item">
    <v-card ripple outlined hover class="card">
      <v-img class="white--text align-end" height="200px" :src="post.image">
        <v-card-title style="background: rgba(0, 0, 0, 0.3);">
          <h2>
            {{ post.title }}
          </h2>
        </v-card-title>
      </v-img>
      <v-card-text>
        <v-chip
          v-for="tag in post.tags"
          :key="tag"
          :href="`/blog/tags/${tag}`"
          @click.stop
          v-text="tag"
        />
      </v-card-text>
      <v-card-text>
        <p>{{ post.description }}</p>
        <small class="date">{{ post.date }}</small>
      </v-card-text>
    </v-card>
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
})
</script>
<style lang="scss" scoped>
.post-item {
  text-decoration: none;

  > .card {
    width: 20rem;
    max-width: 20rem;
  }
}
.date {
  color: grey;
}
</style>
