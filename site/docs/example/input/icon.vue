<template>
	<div class="label">使用属性</div>
	<qy-input v-model="input" suffix-icon="close" />
	<div class="label">使用插槽</div>
	<qy-input v-model="input">
		<template #suffixIcon>
			<qy-icon name="close" />
		</template>
	</qy-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped lang="scss">
.label {
	font-size: 14px;
	margin-bottom: 5px;
	margin-top: 20px;
	&:first-child {
		margin-top: 0;
	}
}
</style>
