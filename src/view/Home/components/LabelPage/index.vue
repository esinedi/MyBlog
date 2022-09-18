<script setup lang="ts">
import { inject, toRaw, reactive } from 'vue'
const tagData = inject('tagData')
</script>

<template>
  <div class="labelPage">
    <div class="labelPage_title">
      <el-icon><PriceTag /></el-icon>
      <span class="title_span">标签</span>
    </div>
    <div class="labelPage_tags">
      <el-button
        v-for="button in tagData"
        :key="button.tagId"
        :style="{ fontSize: `${button.scale}em` }"
        link
        >{{ button.tag }}</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>