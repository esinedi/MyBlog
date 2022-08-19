<script setup lang="ts">
import { defineEmits } from 'vue'
import router from '../../router/index'

const emit = defineEmits(['visibleShow'])
const quit = () => {
  window.sessionStorage.removeItem('token')
  router.push('/')
}
const confirm = () => {
    emit('visibleShow')  // 之前子组件修改父组件的数据时需要添加'update:editConfirm'，但是触发父组件的方法不能加'update'
}
</script>

<template>
  <div class="quit">
    <el-form>
      <el-form-item>
        是否退出登录？
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="quit()">退出</el-button>
        <el-button @click="confirm()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
