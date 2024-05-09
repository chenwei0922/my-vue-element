<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as SvgComs from '@chenwei02/vue-icon'

onMounted(() => {})
const color = ref('white')
const setColor = (v: string) => {
  color.value = v
}
</script>

<template>
  <main class="flex flex-col">
    <div class="flex flex-row items-center h-[40px] mb-[20px]">
      <div class="w-[32px] h-[32px] bg-[white]" @click="setColor('white')" />
      <div class="w-[32px] h-[32px] bg-[orange]" @click="setColor('orange')" />
      <div class="w-[32px] h-[32px] bg-[pink]" @click="setColor('pink')" />
      <div class="w-[32px] h-[32px] bg-[#eee]" @click="setColor('#eee')" />
    </div>
    <div class="w-auto flex flex-row flex-wrap">
      <div
        v-for="(item, index) in Object.values(SvgComs)"
        :key="index"
        class="flex flex-col items-center justify-center w-[80px] h-[80px] border-[1px] border-white/20"
      >
        <component :is="item" :size="30" :color="color" />
        <span class="text-white text-[12px] mt-2">{{ item?.name }}</span>
      </div>
    </div>
  </main>
</template>
