import service from "../../utils/axios";
import type { user } from '../../assets/ts/user'

// 测试接口
export function getNewsList (query: any) {
  return service({
    method:'get',
    url:'/mock/news',
    params:query
  })
}
export function getGoodsList (query: any) {
  return service({
    method:'post',
    url:'/mock/goods',
    data:query
  })
}

// 用户登录接口
export function userLogin (query: user){
  return service({
    method:'post',
    url:'/user/login',
    data:query
  })
}