import service from "../../utils/axios";

export function getNewArticle () {
  return service({
    method:'get',
    url:'/article/newList'
  })
}

export function getArticleTag () {
  return service({
    method:'get',
    url:'/article/tagList'
  })
}

export function getArticle () {
  return service({
    method:'get',
    url:'/article/list'
  })
}