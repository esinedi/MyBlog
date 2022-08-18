// 批量导入mock模块
let mockMoudles: any[] = []
const modules = import.meta.globEager('./*.ts');
Object.keys(modules).forEach(i => {
  mockMoudles.push(i)
})
export default mockMoudles