<template>
  <qy-input v-model="input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('hello world')
</script>
