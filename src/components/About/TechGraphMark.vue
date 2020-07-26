<template>
  <div class="mark" :style="{ left: `${x}%`, top: `${100 - y}%` }">
    <v-chip x-small color="primary">{{text}}</v-chip>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    x: {
      type: Number as PropType<number>,
      default: 0
    },
    y: {
      type: Number as PropType<number>,
      default: 0
    },
    text: {
      type: String as PropType<string>,
      default: ""
    }
  }
})
</script>
<style lang="scss" scoped>
.mark {
  position: absolute;
}
</style>