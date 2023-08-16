import { ErrorPageNameMap, PageEnum } from '@/enums/pageEnum'
import { clearLocalStorage, getLocalStorage } from './storage'

import { StorageEnum } from '@/enums/storageEnum'
import { cryptoDecode } from './crypto'
import router from '@/router'
import { useRoute } from 'vue-router'

/**
 * * 根据名字跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByName = (pageName, isReplace, windowOpen) => {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href')
    openNewWindow(path)
    return
  }
  if (isReplace) {
    router.replace({
      name: pageName
    })
    return
  }
  router.push({
    name: pageName
  })
}

/**
 * * 根据名称获取路由信息
 * @param pageName
 * @param pageName
 */
export const fetchPathByName = (pageName, p) => {
  try {
    const pathData = router.resolve({
      name: pageName
    })
    return p ? pathData[p] : pathData
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！')
  }
}

/**
 * * 根据路径跳转路由
 * @param path
 * @param query
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByPath = (path, query, isReplace, windowOpen) => {
  let fullPath = ''
  if (query?.length) {
    fullPath = `${path}/${query.join('/')}`
  }
  if (windowOpen) {
    return openNewWindow(fullPath)
  }
  if (isReplace) {
    router.replace({
      path: fullPath
    })
    return
  }
  router.push({
    path: fullPath
  })
}

/**
 * * 错误页重定向
 * @param icon
 * @returns
 */
export const redirectErrorPage = (code) => {
  if (!code) return false
  const pageName = ErrorPageNameMap.get(code)
  if (!pageName) return false
  routerTurnByName(pageName)
}

/**
 * * 重新加载当前路由页面
 */
export const reloadRoutePage = () => {
  routerTurnByName(PageEnum.RELOAD_NAME)
}

/**
 * * 退出
 */
export const logout = () => {
  clearLocalStorage(StorageEnum.GO_LOGIN_INFO_STORE)
  routerTurnByName(PageEnum.BASE_LOGIN_NAME)
}

/**
 * * 新开页面
 * @param url
 */
export const openNewWindow = (url) => {
  return window.open(url, '_blank')
}

/**
 * * 判断是否是预览页
 * @returns boolean
 */
export const isPreview = () => {
  return document.location.hash.includes('preview')
}

/**
 * * 获取当前路由下的参数
 * @returns object
 */
export const fetchRouteParams = () => {
  try {
    const route = useRoute()
    return route.params
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！')
  }
}

/**
 * * 通过硬解析获取当前路由下的参数
 * @returns object
 */
export const fetchRouteParamsLocation = () => {
  try {
    // 防止添加query参数的时候，解析ID异常
    return document.location.hash.split('?')[0].split('/').pop() || ''
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！')
    return ''
  }
}

/**
 * * 回到主页面
 * @param confirm
 */
export const goHome = () => {
  routerTurnByName(PageEnum.BASE_HOME_NAME)
}

/**
 * * 判断是否登录（现阶段是有 login 数据即可）
 * @return boolean
 */
export const loginCheck = () => {
  try {
    const info = getLocalStorage(StorageEnum.GO_LOGIN_INFO_STORE)
    if (!info) return false
    const decodeInfo = cryptoDecode(info)
    if (decodeInfo) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}
