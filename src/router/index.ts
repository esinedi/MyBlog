import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 引入 elementUI
import { ElMessage } from 'element-plus'
// DOM 元素加载完成后执行代码
import { nextTick } from 'vue'

// 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/view/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/Home/index.vue'),
  },
]

// 配置路由行为
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savePosion) => {
    return {
      top: 0
    }
  },
  routes
})

// 全局后置路由导航守卫
router.afterEach(async (to, from) => {
  // DOM 元素加载完成后执行代码
  await nextTick()
  if(to.name === 'Home' && from.name === 'Login'){
    ElMessage({
      message: '登录成功！',
      type: 'success',
    })
  }
})

export default router