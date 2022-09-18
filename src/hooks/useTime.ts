// 时间排序方法
// 用于 sort 方法的自定义排序
/**
 * @param key 需要用于排序的 key 值
 * @param bol 正序或者倒序，正序为 true，倒序为 false
 * @returns
 *  */ 
export const useTimeSort = (key:string, bol:boolean) => {
  return (a:any, b:any) => {
    let value1 = a[key];
    let value2 = b[key];
    if(bol) {
      return Date.parse(value1) - Date.parse(value2)
    }else {
      return Date.parse(value2) - Date.parse(value1)
    }
  }
}

// 时间转换
/**
 * @param time 时间
 * @returns 返回时间格式是 年 - 月
 *  */
export const useTimeTrans = (time: string) => {
  const year = new Date(time).getFullYear()
  const month = ((new Date(time).getMonth()+1) >= 10) ? (new Date(time).getMonth()+1) : ('0' + (new Date(time).getMonth()+1))
  return year + '-' + month
}