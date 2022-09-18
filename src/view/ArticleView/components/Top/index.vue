<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Search } from '@element-plus/icons-vue'

const inputArt = ref('')
const emit = defineEmits(['searchInput'])

const searchArt = () => {
  emit('searchInput', inputArt.value)
  inputArt.value = ''
}

</script>

<template>
  <div class="main_top">
    <div class="title">
      <el-icon color="#6889ef"><List /></el-icon>
      <span>文章列表</span>
    </div>
    <div class="search">
      <el-input
        v-model="inputArt"
        class="w-50 m-2"
        placeholder="搜索"
      />
      <el-button :icon="Search" size="large" circle @click="searchArt" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>