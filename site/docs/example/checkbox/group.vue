<template>
  <qy-checkbox-group v-model="checkList">
    <qy-checkbox label="选项1" />
    <qy-checkbox label="选项2" />
    <qy-checkbox label="3">选项3</qy-checkbox>
    <qy-checkbox label="4">选项4</qy-checkbox>
    <qy-checkbox label="选项5" disabled />
  </qy-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkList = ref(['选项1', '3'])
</script>
