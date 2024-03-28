<template>
  <ul class="icon-list">
    <li v-for="(item, index) in iconList" :key="index" class="icon-item">
      <qy-icon :name="item" />
      <span class="name">{{ item }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const iconList = ref([
  'close',
  `circle-close`,
  'eye',
  'eye-close',
  'radio-active',
  'radio',
  'checkbox-active',
  'checkbox'
])
</script>

<style scoped lang="scss">
.icon-list {
  margin: 0;
  padding: 0;
  border: solid 1px var(--vp-c-divider);
  border-bottom: 0;
  border-right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.icon-item {
  margin: 0;
  width: 110px;
  height: 90px;
  border-right: solid 1px var(--vp-c-divider);
  border-bottom: solid 1px var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
}
.icon-item span {
  margin-top: 5px;
  font-size: 14px;
  color: var(--vp-c-text-1);
}
</style>
