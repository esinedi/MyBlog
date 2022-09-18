<script setup lang="ts">
import { inject } from 'vue'

const author = inject('userData')
</script>

<template>
  <div class="author">
    <div class="author_title">
      <span>个人简介</span>
    </div>
    <div class="author_img">
      <img :src="author.headImg" alt="">
    </div>
    <div class="author_name">
      <span> {{ author.username }} </span>
    </div>
    <div class="author_section">
      <p>{{ author.section }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
