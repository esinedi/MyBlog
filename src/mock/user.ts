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
    window.sessionStorage.setItem('token', JSON.stringify(body))
    router.push('index')
    return true
  }else{
    ElMessage.error('账号或者密码错误！')
    return true
  }
}

// 用户信息
const userDetails = () => {
  return {
    data: {
      id: 10086,
      username: 'admin',
      headImg: 'src/assets/img/header-bg.jpg',
      section: '你好啊，哇咔咔',
    }
  }
}

// 有传入数据要用 post
Mock.mock('/user/login', 'post', userLogin) 
Mock.mock('/user/details', 'get', userDetails) 