<template>
  <qy-input v-model="input" type="textarea" :rows="4" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
