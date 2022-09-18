<script setup lang="ts">
// 导入功能
import { watch } from 'vue'
import { useRouteStore } from '../../store/routes'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
// 导入组件
import Quit from '@/components/Quit/index.vue'

const router = useRouter()
const routeColor = useRouteStore()
const { routeDate } = useRouteStore()

watch(() => router.currentRoute.value.path, (toPtah) => {
  routeColor.$patch({
    routeNew: toPtah,
    mobileOrShow: false     
  })
},{ immediate: false, deep: true })

onMounted(() => {
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
})
onUnmounted(() => {
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'inherit'
})
</script>

<template>
  <div class="fixedHeader">
    <div class="site_header">
      <!-- FixedHeader 组件渲染方法 routeColor.mobileShow() -->
      <el-icon @click="routeColor.mobileShow()">
        <Close v-if="routeColor.mobileOrShow" />
      </el-icon>
    </div>
    <div class="flexd_header">
      <ul class="mobile_ul animate__animated animate__backInLeft">
        <li v-for="item in routeDate" :key="item.id">
          <router-link :to="item.link" :class="routeColor.routeNew === item.link ? 'pc_menu_a_active' : '' ">
            <span>{{ item.name }}</span>
          </router-link>
        </li>
        <li>
          <Quit></Quit>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style lang="scss">
.flexd_header{
  .quit{
    .el-button{
      font-size: 30px;
      line-height: 50px;
    }
  }
}
</style>
