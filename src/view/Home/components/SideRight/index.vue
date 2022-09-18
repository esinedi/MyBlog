<script setup lang="ts">
import Author from '../Author/index.vue'
import Notice from '../Notice/index.vue'
import LabelPage from '../LabelPage/index.vue'
</script>

<template>
  <div class="sideRight">
    <Author></Author>
    <Notice></Notice>
    <LabelPage></LabelPage>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
