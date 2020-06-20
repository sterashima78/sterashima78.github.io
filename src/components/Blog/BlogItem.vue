<template>
  <g-link :to="post.path" class="post-item">
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
          :key="tag.title"
          v-text="tag.title"
          :href="`/blog/tags/${tag.title}`"
          @click.stop="() => false"
        />
      </v-card-text>
      <v-card-text>
        <p>{{ post.description }}</p>
        <small class="date">{{ post.date }}</small>
      </v-card-text>
    </v-card>
  </g-link>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    post: {
      type: Object as PropType<any>,
      default: (): any => ({}),
    },
  },
});
</script>
<style lang="scss" scoped>
.post-item {
  text-decoration: none;

  > .card {
    width: 100%;
    max-width: 20rem;
  }
}
.date {
  color: grey;
}
</style>
