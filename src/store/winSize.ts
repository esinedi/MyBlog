import { defineStore } from 'pinia';

export const useWinSize = defineStore('route', {
  state: () => {
    return {
      // 这里写变量
      winScrollHeight: 0
    };
  },
  actions: {
    // 这里写方法action
    getWinHeight() {
      this.winScrollHeight = document.documentElement.scrollTop
      console.log(this.winScrollHeight)
    }
  },
  getters: {
    //   getters
  }
});