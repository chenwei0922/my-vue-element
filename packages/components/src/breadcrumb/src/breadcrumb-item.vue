<script lang="ts" setup>
import { getCurrentInstance, inject, toRefs } from 'vue'

defineOptions({ name: 'QyBreadcrumbItem' })

const props = defineProps({
  // 要跳转的路由
  to: { type: [String, Object], default: '' },
  // 替换当前路由
  replace: Boolean,
  // 自定义点击事件
  customEvent: { type: Function, default: undefined }
})
const instance = getCurrentInstance()!
const breadcrumbContext = inject('breadcrumbKey', undefined)!

const { separator, separatorIcon } = toRefs(breadcrumbContext)
const router = instance.appContext.config.globalProperties.$router

const onClick = () => {
  if (props.customEvent) {
    props.customEvent()
    return
  }
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>

<template>
  <span class="qy-breadcrumb__item">
    <span class="qy-breadcrumb__inner" :class="{ 'is-link': !!to }" @click="onClick">
      <slot />
    </span>
    <i v-if="separatorIcon">
      <component :is="separatorIcon" />
    </i>
    <span v-else class="qy-breadcrumb__separator">{{ separator }}</span>
  </span>
</template>
