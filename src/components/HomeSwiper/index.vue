<script setup lang="ts">
import { ref, toRaw, onMounted } from 'vue'
// ? 是可选的意思

type Props = {
    getArticleList: Array
}

withDefaults(defineProps<Props>(), {
  getArticleList: [{}]
})

</script>

<template>
  <div class="homeSwiper">
    <el-carousel trigger="click" height="340px">
      <el-carousel-item v-for="(item, i) in getArticleList" :key="i">
        <div class="swiper_item" :style="{ background: `url('${item.img}') no-repeat` }">
          <div class="swiper_title">
            <p class="bg_title">{{ item.title }}</p>
            <p class="med_title">{{ item.citation }}</p>
            <div class="tag_title">
              <el-tag v-for="(tag, i2) in item.tags" :key="i2" type="success" effect="dark">
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
