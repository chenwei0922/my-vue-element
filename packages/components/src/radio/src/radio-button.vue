<template>
	<label class="qy-radio-button" :class="{ checked: modelValue === label, disabled }" @click="handleChange">
		<span class="qy-radio__label">
			<slot>{{ label }}</slot>
		</span>
	</label>
</template>
<script setup lang="ts">
import { nextTick } from 'vue'
import { radioButtonEmits, radioButtonProps } from './radio-button'
import { useRadio } from './use-radio'
import { CHANGE_EVENT } from './constants'

defineOptions({ name: 'qy-radio-button' })

const props = defineProps(radioButtonProps)
const emit = defineEmits(radioButtonEmits)

const { disabled, modelValue } = useRadio(props, emit)

const handleChange = () => {
	if (disabled.value) return
	modelValue.value = props.label
	nextTick(() => emit(CHANGE_EVENT, modelValue.value))
}
</script>
