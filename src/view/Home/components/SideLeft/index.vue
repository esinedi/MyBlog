<script setup lang="ts">
import { inject } from 'vue'
import ArtItem from '@/components/ArtItem/index.vue'
const data = inject('article')
</script>

<template>
  <div class="sideLeft">
    <div class="topLeft">
      <span class="title">最近更新文章</span>
      <el-button color="#6889ef" plain>更多</el-button>
    </div>
    <div class="arts">
      <ArtItem v-for="item in data" :key="item.id" :ArtData="item"></ArtItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
