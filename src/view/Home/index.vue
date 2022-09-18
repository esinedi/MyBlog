<script setup lang="ts">
// 导入组件
import HomeSwiper from '@/components/HomeSwiper/index.vue'
import SideLeft from './components/SideLeft/index.vue'
import SideRight from './components/SideRight/index.vue'
// 导入接口
import { getNewArticle } from '@/api/article'
// 导入 vue 功能
import { ref, toRaw, onMounted, provide } from 'vue'
// 导入自定义 hooks 功能
import { useTimeSort } from '@/hooks/useTime.ts'

// 文章数据
const getArticleList = ref([{}])
// 获取文章方法
const getArticle = async () => {
  const { data } = await getNewArticle()
  getArticleList.value = data.data.sort(useTimeSort("date",false))
}

provide('article', getArticleList)

// 页面初始化
onMounted(() => {
  getArticle()
})
</script>

<template>
  <div class="home">
    <div class="main">
      <HomeSwiper :getArticleList="getArticleList"></HomeSwiper>
      <div class="content">
        <div class="side_left">
          <SideLeft></SideLeft>
        </div>
        <div class="side_right">
          <SideRight></SideRight>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
