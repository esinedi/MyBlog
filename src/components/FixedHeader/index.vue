<script setup lang="ts">
import { watch } from 'vue'
import { useRouteStore } from '@/store/routes.ts'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

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
  document.querySelector('body').style.overflow = 'hidden'
})
onUnmounted(() => {
  document.querySelector('body').style.overflow = 'inherit'
})
</script>

<template>
  <div class="fixedHeader">
    <div class="fiexd_header">
      <ul class="mobile_ul animate__animated animate__backInLeft">
        <li v-for="item in routeDate" :key="item.id">
          <router-link :to="item.link" :class="routeColor.routeNew === item.link ? 'pc_menu_a_active' : '' ">
            <span>{{ item.name }}</span>
            <div></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
