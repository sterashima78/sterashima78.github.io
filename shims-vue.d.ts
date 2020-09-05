import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $isAMP: boolean
  }
}
