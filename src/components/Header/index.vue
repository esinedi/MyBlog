<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouteStore } from '@/store/routes'
import { useRouter } from 'vue-router'
import FixedHeader from '@/components/FixedHeader/index.vue'
import Quit from '@/components/Quit/index.vue'

// 监控路由变化
const router = useRouter()
const routeColor = useRouteStore()
const { routeDate } = useRouteStore()
const opacityOne = ref(1)
const opacityTwo = ref(0)
const { username } = JSON.parse(window.sessionStorage.getItem('token') as string)
const visible = ref(false)

// 监控路由变化
watch(() => router.currentRoute.value.path, async (toPtah) => {
    routeColor.$patch({
      routeNew: toPtah          
    })
},{ immediate: true, deep: true })
// 组件是否渲染
const mobileShow = () => {
  routeColor.$patch({
    mobileOrShow: !routeColor.mobileOrShow      
  })
}
// 监控页面离顶部的距离
const getWinHeight = () => {
  routeColor.$patch({
    winScrollHeight: document.documentElement.scrollTop         
  })
  opacityOne.value = 1-routeColor.winScrollHeight/window.innerHeight * 1.5
  opacityTwo.value = routeColor.winScrollHeight/window.innerHeight * 1.1
}
getWinHeight()
window.addEventListener('scroll', getWinHeight , true)
// quit 组件是否关闭
const visibleShow = () => {
  visible.value = false
}
</script>

<template>
  <div class="header">
    <transition name="fade">
      <FixedHeader v-if="routeColor.mobileOrShow"></FixedHeader>
    </transition>
    <nav>
      <div class="site_header">
        <ul class="mobile_menu">
          <li class="mobile_name" @mouseenter="visible = true" @mouseleave="visible = false">
            <el-tooltip class="name_tooltip" placement="bottom" effect="light">
              <template v-slot:content>
                <Quit @visibleShow="visibleShow"></Quit>
              </template>
              <div>
                欢迎您，{{ username }}
              </div>
            </el-tooltip>
          </li>
          <li class="mobile_btn">
            <el-icon @click="mobileShow()">
              <Close v-if="routeColor.mobileOrShow" />
              <MoreFilled v-else/>
            </el-icon>
          </li>
        </ul>
        <ul class="pc_menu">
          <li v-for="item in routeDate" :key="item.id">
            <router-link :to="item.link" :class="routeColor.routeNew === item.link ? 'pc_menu_a_active' : '' ">
              <span>{{ item.name }}</span>
              <div></div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header-bg" :style="{ opacity: opacityTwo }"></div>
    <div class="header_main" :style="{ opacity: opacityOne }">
      <p>个人博客</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style>
.el-popper {
  margin-top: -20px !important;
}
</style>
