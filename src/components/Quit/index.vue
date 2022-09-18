<script setup lang="ts">
import { defineEmits } from 'vue'
import router from '../../router/index'

const quit = () => {
  window.sessionStorage.removeItem('token')
  router.push('/')
}
</script>

<template>
  <div class="quit">
    <el-form>
      <el-form-item>
        <el-button
          type="danger"
          @click="quit()"
          link
          >
          <el-icon :style="{ marginRight: '10px' }"><CircleClose /></el-icon>
            退出登录
          </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style>
.el-button{
  font-family: 'myFont';
  font-size: 1.1em;
}
.el-button.is-link:hover{
  color: red;
}
.el-form-item:last-child{
  margin-bottom: 0px;
}
</style>
