// 引入 mockjs
import Mock from 'mockjs'
// 引入路由
import router from '../router/index'
// 引入 elementUI
import { ElMessage } from 'element-plus'

// 用户登录
const userLogin = (user: any) => {
  let body  = JSON.parse(user.body)
  if(body.username === '' || body.pwd === ''){
    ElMessage({
      message: '您的账号或密码没有输入！',
      type: 'warning',
    })
    return false
  }
  if(body.username === 'admin' && body.pwd == 'admin'){
    router.push('home')
    return true
  }else{
    ElMessage.error('账号或者密码错误！')
    return true
  }
}
// 传入数据要用 post
Mock.mock('/user/login', 'post', userLogin) 