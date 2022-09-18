// 引入 mockjs
import Mock from 'mockjs'

const Random = Mock.Random

/**
 * getNewArticle 获取最新的 5 条文章信息
 * @returns
 */
const getNewArticle = Mock.mock({
  "data|5": [
    {
      "id|+1":1,
      author: "@cname",
      title: "@ctitle(5)",
      citation: "@csentence(15)",
      img:"@Image('1300x340', '@color', '@color', '@ctitle')",
      authorImg: "@Image('50x50', '@color', '@color', '@ctitle')",
      "tags|2-5": ["@ctitle(2,3)"],
      date: "@date()"
    }
  ]
})

/**
 * getArticleTag 获取文章标签
 * @returns
 */

const getArticleTag = Mock.mock({
  "data|10-15": [
    {
      "tagId|+1":1,
      tag: "@ctitle(2,3)",
      tagNum: "@integer(5, 15)"
    }
  ]
})

/**
 * getArticle 获取所有文章
 * @returns
 */
const getArticle = () => {
  return Mock.mock({
    "data|20-30": [
      {
        "id|+1":1,
        author: "@cname",
        title: "@ctitle(5)",
        citation: "@csentence(15)",
        img:"@Image('1300x340', '@color', '@color', '@ctitle')",
        authorImg: "@Image('50x50', '@color', '@color', '@ctitle')",
        "tags|2-5": ["@ctitle(2,3)"],
        date: "@date()"
      }
    ]
  })
}

// 传入数据要用 post
Mock.mock('/article/newList', 'get', () => {
  return getNewArticle
})
Mock.mock('/article/tagList', 'get', () => {
  return getArticleTag
})
Mock.mock('/article/list', 'get', () => {
  return getArticle()
})