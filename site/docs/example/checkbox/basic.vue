<template>
  <qy-checkbox v-model="checked" label="选项1" />
  <qy-checkbox v-model="checked1">选项2</qy-checkbox>
  <qy-checkbox v-model="checked2" label="选项3" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref(false)
const checked1 = ref(false)
const checked2 = ref(true)
</script>
