<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import { ref, onMounted, provide } from 'vue'
// 导入用户信息接口
import { userDetails } from '@/api/user'
// 导入文章数据接口
import { getArticleTag, getArticle} from '@/api/article'
// 导入自定义 hooks 功能
import { useTimeSort } from '@/hooks/useTime.ts'

// 初始化参数
// 用户
const userData = ref({})
// 标签
const tagData = ref({})
// 文章
const listData = ref({})

// 接口方法
const getUserData = async() => {
  const { data } = await userDetails()
  userData.value = data.data
}
const getTagData = async() => {
  const { data } = await getArticleTag()
  tagData.value = tagEdit(data.data)
}
const getListData = async() => {
  const { data } = await getArticle()
  listData.value = data.data.sort(useTimeSort("date",false))
}

// 设置字体参数
const tagEdit = (data: Array) => {
  const tagNum = data.reduce((a, i) => {
    return a + i.tagNum
  }, 0)
  const length = data.length
  data.forEach(item => {
    if((item.tagNum*length/tagNum).toFixed(2) <= 0.80) {
      item.scale = 0.80
    }else if ((item.tagNum*length/tagNum).toFixed(2) >= 1.50) {
      item.scale = 1.50
    }else {
      item.scale = Number((item.tagNum*length/tagNum).toFixed(2))
    }
  })
  return data
}

// 调用
onMounted(() => {
  getUserData()
  getTagData()
  getListData()
})

// 传递给子孙元素参数
provide('userData', userData)
provide('tagData', tagData)
provide('listData', listData)
// 传递给子孙元素方法
provide('getListData', getListData)

</script>

<template>
  <div class="index">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
