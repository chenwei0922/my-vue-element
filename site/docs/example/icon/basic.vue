<template>
  <qy-icon :name="name" />
  <qy-icon :name="name" color="red" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('close')
</script>
