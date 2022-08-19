<script setup lang="ts">
import Header from '@/components/Header/index.vue'
</script>

<template>
  <div class="Index">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
