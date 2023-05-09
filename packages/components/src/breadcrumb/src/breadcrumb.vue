<script lang="ts" setup>
import { provide } from 'vue'
import { breadcrumbProps } from './breadcrumb'

defineOptions({ name: 'QyBreadcrumb' })

const props = defineProps(breadcrumbProps)
provide('breadcrumbKey', props)
</script>

<template>
  <div class="qy-breadcrumb">
    <slot />
  </div>
</template>
