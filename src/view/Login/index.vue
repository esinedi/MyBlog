<script setup lang="ts">
// 导入接口
import { userLogin } from '@/api/user'
// 导入功能
import { ref, Ref, toRaw } from 'vue'
// 导入方法
import { useMousePointer } from '@/hooks/useMouseAdk'
import { useLoginprop } from '@/hooks/login'
const { x, y } = useLoginprop()
const user = ref({
  username: '',
  pwd: ''
})
const getUserLogin = async () => {
  let row = toRaw(user.value)
  await userLogin(row)
}
const { xPos, yPos } = useMousePointer( x, y, 25)
</script>

<template>
  <div class="login">
    <div class="login_main">
      <el-row class="row_center">
        <el-col :xs="0" :sm="0" :md="0" :lg="16">
          <div class="login_board" :style="{ transform: `rotateX(${-yPos}deg) rotateY(${xPos}deg)` }"></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <transition>
            <div class="login_box">
              <el-row>
                <el-col :span="7">
                  <p class="bg_size">登录</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
                  <p class="med_size">账号：</p>
                </el-col>
                <el-col :span="17">
                  <el-input v-model="user.username" placeholder="请输入您的账号" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
                  <p class="med_size">密码：</p>
                </el-col>
                <el-col :span="17">
                  <el-input v-model="user.pwd" placeholder="请输入您的密码" type="password" show-password />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button color="#626aef" plain @click="getUserLogin()">登录</el-button>
                </el-col>
              </el-row>
            </div>
          </transition>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
