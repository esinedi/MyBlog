<script setup lang="ts">
import { inject, ref, toRaw, watch } from 'vue'
import { useTimeTrans } from '@/hooks/useTime.ts'
import Top from './components/Top/index.vue'
import TimeSelect from './components/TimeSelect/index.vue'
import TagsSelect from './components/TagsSelect/index.vue'
import ArtItem from '@/components/ArtItem/index.vue'

// 获取数据
const showPage = ref(1)
const listData = inject('listData')
// 原始数据
const listDatas = ref([])

watch(listData, (newVal, oldVal) => {
  // 深拷贝数据
  listDatas.value.length === 0 ? listDatas.value = JSON.parse(JSON.stringify(listData.value)) : listDatas.value = listDatas.value
})

// 判断搜索
const searchInput = (val) => {
  (val === '') ?
    listData.value = listDatas.value :
    listData.value = listData.value.filter(item => item.title.indexOf(val) !== -1)
}

// 时间范围
// 判断数据
const timeRange = (val) => {
  (JSON.stringify(val) == '{}') ? 
    listData.value = listDatas.value : 
    listData.value = listData.value.filter(item => (new Date(item.date) >= val.dateStart && new Date(item.date) <= val.dateEnd))
}
</script>

<template>
  <div class="article">
    <div class="article_background">
      <div class="search_select">
        <Top @searchInput="searchInput"></Top>
        <div class="select_main">
          <TimeSelect @timeRange="timeRange"></TimeSelect>
          <TagsSelect></TagsSelect>
        </div>
        <span class="search_num">共为您查询到以下{{ listData.length }}条数据</span>
      </div>
      <div class="arts">
        <ArtItem v-for="(item, i) in listData" :key="i" :ArtData="item" v-show="i < showPage*10 && i >= (showPage-1)*10"></ArtItem>
        <el-pagination background layout="prev, pager, next" :total="listData.length" :page-size="10" v-model:currentPage="showPage" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style >
.search_select .el-input{
  border: 2px solid black;
  border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
}
</style>