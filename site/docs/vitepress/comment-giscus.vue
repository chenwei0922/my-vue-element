<template>
  <div id="giscus-comment">
    <Giscus
      src="https://giscus.app/client.js"
      repo="chenwei0922/qy-element"
      repo-id="R_kgDOJBdv2A"
      category="Announcements"
      category-id="DIC_kwDOJBdv2M4Ceixk"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="isDark ? 'dark' : 'light'"
      lang="zh-CN"
      crossorigin="anonymous"
    />
  </div>
</template>
<!-- export type Theme = 'light' | 'light_high_contrast' | 'light_protanopia' | 'light_tritanopia' | 'dark' | 'dark_high_contrast' | 'dark_protanopia' | 'dark_tritanopia' | 'dark_dimmed' | 'preferred_color_scheme' | 'transparent_dark' | 'noborder_light' | 'noborder_dark' | 'noborder_gray' | 'cobalt' | 'purple_dark' | `https://${string}` | GenericString; -->

<script lang="ts" setup>
import Giscus from '@giscus/vue'
// import { reactive } from 'vue'
import { useData } from 'vitepress'
const { isDark } = useData()

// const dic = reactive({
//   repo: 'chenwei0922/qy-element',
//   repoId: 'R_kgDOJBdv2A',
//   category: 'Announcements',
//   categoryId: 'DIC_kwDOJBdv2M4Ceixk',
//   mapping: 'pathname',
//   strict: '0',
//   reactionsEnabled: '1',
//   emitMetadata: '0',
//   inputPosition: 'top',
//   theme: 'preferred_color_scheme',
//   lang: 'zh-CN'
// })
</script>
