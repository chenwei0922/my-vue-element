<template>
  <qy-input v-model="input" show-password />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('123456')
</script>
