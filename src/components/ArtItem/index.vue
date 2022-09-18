<script setup lang="ts">
import { ref, toRaw } from 'vue'

type Props = {
  ArtData?: Object
}

withDefaults(defineProps<Props>(), {
  ArtData: {}
})

</script>

<template>
  <div class="artItem">
    <div class="item_img">
      <img :src="ArtData.img" alt="">
    </div>
    <div class="item_msg">
      <span class="item_time">{{ ArtData.date }}</span>
      <span class="item_title"> {{ ArtData.title }} </span>
      <p class="item_section"> {{ ArtData.citation }} </p>
      <div class="item_author">
        <img :src="ArtData.authorImg" alt="">
        <span> {{ ArtData.author }} </span>
        <div class="scrollbar_top">
          <el-scrollbar>
            <div class="tag_title scrollbar-flex-content">
              <el-tag v-for="(tag, i) in ArtData.tags" :key="i" type="success">
                {{ tag }}
              </el-tag>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
.scrollbar_top{
  flex: 1;
  .el-scrollbar{
    height: 24px;
  }
}
.scrollbar-flex-content{
  display: flex;
}
@media screen and (max-width: 768px) {
  .scrollbar_top{
    .el-scrollbar{
      width: 98px;
    }
  }
}
</style>
