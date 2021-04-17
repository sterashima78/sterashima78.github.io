<template>
  <div :class="$style.timeline">
    <div
      v-for="(timeline, index) in timelines"
      :key="index"
      :class="$style.item"
    >
      <div
        :class="[$style.point, `bg-${typeToColor(timeline.type)}-700`]"
      ></div>
      <div :class="$style.contents">
        <p>
          <span :class="$style['tags-title']">{{ timeline.time }}</span>
          <t-chip
            :class="[$style.type, `bg-${typeToColor(timeline.type)}-700`]"
            >{{ timeline.type }}</t-chip
          >
        </p>
        <p
          v-if="timeline.title"
          :class="$style.title"
          v-text="timeline.title"
        />
        <p v-if="timeline.technique" :class="$style.tags">
          <span :class="$style['tags-title']">使用技術</span>:
          <t-chip
            v-for="tech in timeline.technique"
            :key="tech"
            :class="$style.tag"
            >{{ tech }}</t-chip
          >
        </p>
        <p v-if="timeline.phase" :class="$style.tags">
          <span :class="$style['tags-title']">担当作業</span>:
          <t-chip
            v-for="phase in timeline.phase"
            :key="phase"
            :class="$style.tag"
            >{{ phase }}</t-chip
          >
        </p>
        <p v-if="timeline.contents" class="my-2" v-text="timeline.contents" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { TimeLineItem, typeToColor } from './types'
export default defineComponent({
  name: 'TTimeline',
  components: {
    TChip: () => import('~/components/TChip.vue'),
  },
  props: {
    timelines: {
      type: Array as PropType<TimeLineItem[]>,
      default: (): TimeLineItem[] => [],
    },
  },
  setup() {
    return {
      typeToColor,
    }
  },
})
</script>
<style lang="scss" module>
.timeline {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 19px;
    height: 100%;
    width: 2px;
    background: grey;
  }
}
.item {
  position: relative;
  @apply flex;
  @apply justify-end;
  @apply my-4;
}
.point {
  position: absolute;
  left: 5px;
  top: 10px;
  width: 30px;
  height: 30px;
  @apply rounded-full;
  @apply border-white;
  @apply border-4;
  @apply shadow-lg;
}
.contents {
  width: calc(100% - 48px);
  border-width: 1px;
  @apply rounded-lg;
  @apply border-black;
  @apply shadow-lg;
  @apply p-4;
  @apply relative;
  @apply border-opacity-25;

  &::after,
  &::before {
    content: '';
    position: absolute;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    top: 12px;
  }
  &::after {
    border-right: 10px solid white;
    left: -8px;
    @apply shadow-lg;
  }

  &::before {
    border-right: 10px solid rgba(0, 0, 0, 0.25);
    left: -10px;
  }
}

.type {
  @apply text-xs font-bold text-white;
}

.tags {
  @apply text-xs my-2;
  &-title {
    @apply font-bold;
  }
}

.tag {
  @apply bg-gray-300;
}

.title {
  @apply text-lg font-bold my-2;
}
</style>
