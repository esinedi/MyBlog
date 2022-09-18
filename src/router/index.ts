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
    path: '/index',
    name: 'Index',
    component: () => import('@/view/Index/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/view/Home/index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/view/About/index.vue'),
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/view/ArticleView/index.vue'),
      }
    ]
  }
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

// 全局前置路由导航守卫
router.beforeEach((to, from, next) => {
  if(to.name === "Login"){
    return next()
  }
  const isLogin = JSON.parse(window.sessionStorage.getItem('token') as string)
  if(!isLogin){
    ElMessage.error('请输入您的登录信息！')
    return next('/')
  }
  if(isLogin.username === 'admin' && isLogin.pwd === 'admin'){
    return next()
  }else{
    ElMessage.error('您的登录信息是错误的！')
    return next('/')
  }
})

// 全局后置路由导航守卫
router.afterEach(async (to, from) => {
  // DOM 元素加载完成后执行代码
  await nextTick()
  if(to.name === 'Index' && from.name === 'Login'){
    ElMessage({
      message: '登录成功！',
      type: 'success',
    })
  }
})

export default router