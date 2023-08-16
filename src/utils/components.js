import { AsyncLoading, AsyncSkeletonLoading } from '@/components/GoLoading'

import { defineAsyncComponent } from 'vue'

/**
 * * 动态注册组件
 */
export const componentInstall = (key, node) => {
  if (!window['$vue'].component(key) && node) {
    window['$vue'].component(key, node)
  }
}

/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader) =>
  defineAsyncComponent({
    loader,
    loadingComponent: AsyncLoading,
    delay: 20
  })

export const loadSkeletonAsyncComponent = (loader) =>
  defineAsyncComponent({
    loader,
    loadingComponent: AsyncSkeletonLoading,
    delay: 20
  })
