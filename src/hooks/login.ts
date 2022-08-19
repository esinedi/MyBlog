import { useMouse } from '@vueuse/core'

export const useLoginprop = () => {
  // hooks 公共的属性
  // 鼠标的 x, y 坐标
  const { x, y } = useMouse()
  return {
    x,
    y
  }
}