<template>
  <qy-radio-group v-model="radio">
    <qy-radio-button v-for="(item, index) in data" :key="index" :label="index">{{ item }}</qy-radio-button>
  </qy-radio-group>
  <div style="margin: 20px 0" />
  <qy-radio-group v-model="radio1" disabled>
    <qy-radio-button v-for="(item, index) in data" :key="index" :label="index">{{ item }}</qy-radio-button>
  </qy-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref(['选项1', '选项2', '选项3', '选项4'])
const radio = ref(1)
const radio1 = ref(2)
</script>
