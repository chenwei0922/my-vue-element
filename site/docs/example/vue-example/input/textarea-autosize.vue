<template>
  <qy-input v-model="input" type="textarea" autosize />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
