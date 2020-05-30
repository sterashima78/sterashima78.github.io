<template>
  <g-link :to="post.path" class="post-item">
    <v-card ripple outlined hover class="card">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>
          <h2>
            {{ post.title }}
          </h2>
        </v-card-title>
      </v-img>
      <v-card-text>
        <v-chip v-for="tag in post.tags" :key="tag">{{ tag }}</v-chip>
      </v-card-text>
      <v-card-text>
        <p>{{ post.description }}</p>
        <small class="date">{{ post.date }}</small>
      </v-card-text>
    </v-card>
  </g-link>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss" scoped>
.post-item {
  text-decoration: none;

  > .card {
      width: 100%;
    max-width: 25rem;
  }
}
.date {
  color: grey;
}
</style>
