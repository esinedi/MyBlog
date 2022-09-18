<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouteStore } from '../../store/routes'
import { useRouter } from 'vue-router'
import FixedHeader from '@/components/FixedHeader/index.vue'
import Quit from '@/components/Quit/index.vue'
import Logo from '@/components/Logo/index.vue'

// 监控路由变化
const router = useRouter()
const routeColor = useRouteStore()
const { routeDate } = useRouteStore()
const opacityOne = ref(1)
const opacityTwo = ref(0)
const { username } = JSON.parse(window.sessionStorage.getItem('token') as string)

// 监控路由变化
watch(() => router.currentRoute.value.path, async (toPtah) => {
    routeColor.$patch({
      routeNew: toPtah          
    })
},{ immediate: true, deep: true })
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
</script>

<template>
  <div class="header">
    <transition name="fade">
      <FixedHeader v-if="routeColor.mobileOrShow"></FixedHeader>
    </transition>
    <nav>
      <el-row :gutter="10">
        <el-col :span="4">
          <div class="logo_title">
            <Logo></Logo>
            <span class="logo_name">Blog</span>
          </div>
        </el-col>
        <el-col :span="16">
          <ul class="pc_menu">
            <li v-for="item in routeDate" :key="item.id">
              <router-link :to="item.link" :class="routeColor.routeNew === item.link ? 'pc_menu_a_active' : '' ">
                <span>{{ item.name }}</span>
                <div></div>
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul class="mobile_menu">
            <li class="mobile_name">
              <el-tooltip :show-arrow="false" class="name_tooltip" placement="bottom" effect="light">
                <template v-slot:content>
                  <Quit></Quit>
                </template>
                <div>
                  欢迎您:{{ username }}
                </div>
              </el-tooltip>
            </li>
            <li class="mobile_btn">
              <!-- FixedHeader 组件渲染方法 routeColor.mobileShow() -->
              <el-icon @click="routeColor.mobileShow()">
                <Close v-if="routeColor.mobileOrShow" />
                <MoreFilled />
              </el-icon>
            </li>
          </ul>
        </el-col>
      </el-row>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style>
.el-popper {
  margin-top: 0px !important;
}
.el-popper.is-light{
  padding: 6px 12px;
  border: 3px solid black;
  border-radius: 10px;
}

.el-popper.el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
