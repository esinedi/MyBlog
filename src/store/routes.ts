import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', {
  state: () => {
    return {
      // 这里写变量
      // 路由信息
      routeNew:'/',
      routeDate:[
        {
          id: 1,
          link: '/index',
          name: '首页'
        },
        {
          id: 2,
          link: '/index/article',
          name: '文章'
        },
        {
          id: 3,
          link: '/index/about',
          name: '关于'
        }
      ],
      // 离顶部的高度
      winScrollHeight: 0,
      // FixedHeader 组件是否展示
      mobileOrShow: false
    };
  },
  actions: {
    // 这里写方法action
    getWinHeight() {
      this.winScrollHeight = document.documentElement.scrollTop
    },
    mobileShow(){
      this.mobileOrShow = !this.mobileOrShow
    }
  },
  getters: {
    //   getters
  }
});