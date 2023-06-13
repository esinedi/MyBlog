<script setup lang="ts">
import { ref, inject } from 'vue'

const tagData:any = inject('tagData')
const getListData = inject('getListData')

const checkTag = (e) => {
  if(Object.values(e.currentTarget.classList).find(item => item === "active")){
    e.currentTarget.classList.remove("active")
  }else{
    e.currentTarget.classList.add("active")
  }
  if(typeof getListData == 'function'){
    getListData()
  }
}

</script>

<template>
  <div class="tagsSelect">
    <span class="tags_title">标签</span>
    <div class="tags">
      <div class="tag" v-for="item in tagData" :key="item.tagId" @click="checkTag($event)">
        <span>
          {{ item.tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>