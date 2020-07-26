<template>
  <div class="wrap">
    <span class="x label">好き</span>
    <span class="y label">得意</span>
    <div class="x axis"></div>
    <div class="y axis"></div>
    <TechGraphMark :x="90" :y="100" text="Vue" />
    <TechGraphMark :x="90" :y="65" text="F#" />
    <TechGraphMark :x="30" :y="85" text="Perl" />
    <TechGraphMark :x="70" :y="90" text="Javascript" />
    <TechGraphMark :x="80" :y="95" text="Typescript" />
    <TechGraphMark :x="80" :y="30" text="Haskell" />
    <TechGraphMark :x="30" :y="45" text="Python" />
    <TechGraphMark :x="30" :y="80" text="PHP" />
    <TechGraphMark :x="85" :y="90" text="Nuxt" />
    <TechGraphMark :x="35" :y="40" text="Go" />
    <TechGraphMark :x="70" :y="60" text="Gridsome" />
    <TechGraphMark :x="20" :y="80" text="R" />
    <TechGraphMark :x="30" :y="60" text="Java" />
    <TechGraphMark :x="35" :y="65" text="Spring" />
    <TechGraphMark :x="50" :y="75" text="GitHub" />
    <TechGraphMark :x="55" :y="70" text="GitHub Actions" />
    <TechGraphMark :x="75" :y="65" text="Docker" />
    <TechGraphMark :x="50" :y="60" text="Vagrant" />
    <TechGraphMark :x="45" :y="55" text="Apache" />
    <TechGraphMark :x="50" :y="45" text="Nginx" />
    <TechGraphMark :x="40" :y="30" text="Ansible" />
    <TechGraphMark :x="45" :y="35" text="Jenkins" />
    <TechGraphMark :x="47" :y="65" text="GitLab" />
    <TechGraphMark :x="20" :y="70" text="Circle CI" />
    <TechGraphMark :x="40" :y="50" text="scikit-learn" />
    <TechGraphMark :x="20" :y="30" text="Flask" />
    <TechGraphMark :x="25" :y="50" text="MySQL" />
    <TechGraphMark :x="30" :y="20" text="PostgreSQL" />
    <TechGraphMark :x="20" :y="20" text="C++" />
    <TechGraphMark :x="10" :y="10" text="C" />
    <TechGraphMark :x="10" :y="75" text="jQuery" />
    <TechGraphMark :x="90" :y="85" text="fp-ts" />
    <TechGraphMark :x="60" :y="45" text="awk" />
    <TechGraphMark :x="60" :y="40" text="sed" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TechGraphMark from "./TechGraphMark.vue";
export default Vue.extend({
  components: {
    TechGraphMark
  }
})
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px black solid;

  > .axis {
    position: absolute;
    left: calc(50% - 2px);
    top: calc(50% - 2px);
    border: 1px black solid;

    &.x {
      width: 100%;
      left: 0;
    }
    &.y {
      height: 100%;
      top: 0;
    }
  }

  > .label {
    position: absolute;
    z-index: 100;

    &.x {
      right: 0;
      top: calc(50% - 1.5em);
    }

    &.y {
      left: calc(50% - 2.5em);
      top: 0;
    }
  }
}
</style>