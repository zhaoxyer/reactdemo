//配置不需要登陆的页面
const notNeedLogin = [
  '/login', '/register'
]
const needLogin = pathName =>{
  const index = notNeedLogin.findIndex(item =>{
    return item===pathName
  })
  return index === -1 ? true : false
}
//配置不需要登陆的页面且跳转到改页面时若已登陆返回首页
const backIndexPage = [
  '/login', '/register'
]
const backIndex = pathName =>{
  const index = backIndexPage.findIndex(item =>{
    return item===pathName
  })
  return index !== -1 ? true : false
}
export  {needLogin, backIndex}