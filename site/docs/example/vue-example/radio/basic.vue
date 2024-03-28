<template>
  <qy-radio v-model="radio" label="1">选项1</qy-radio>
  <qy-radio v-model="radio" label="2">选项2</qy-radio>
  <qy-radio v-model="radio" label="1" disabled>选项1</qy-radio>
  <qy-radio v-model="radio" label="2" disabled>选项2</qy-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')
</script>
