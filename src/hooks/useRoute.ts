// 路由
import router from '../router/index'
import { useRouteStore } from '../store/routes'
const route = useRouteStore()

export const setRouter = () => {
  router.afterEach((to, from) => {
    route.routeNew = to.path
  })
  return true
}