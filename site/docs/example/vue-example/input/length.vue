<template>
  <qy-input v-model="input" type="text" :maxlength="20" show-word-limit />
  <div style="margin: 20px 0" />
  <qy-input v-model="textarea" type="textarea" :rows="4" :maxlength="100" show-word-limit />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('123456')
const textarea = ref('12345678')
</script>
