import AsyncLoading from './index.vue'
import AsyncSkeletonLoading from './LoadingSkeleton.vue'
import GoLoading from './index.vue'

// 正常组件
export { GoLoading }

// 异步
AsyncLoading.install = (app) => {
  app.component('AsyncLoading', AsyncLoading)
}

AsyncSkeletonLoading.install = (app) => {
  app.component('AsyncSkeletonLoading', AsyncSkeletonLoading)
}
export { AsyncLoading, AsyncSkeletonLoading }
