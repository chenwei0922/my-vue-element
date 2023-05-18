<template>
	<label class="qy-radio" :class="{ checked: modelValue === label, disabled }" @click="handleChange">
		<span class="qy-radio__input">
			<QyIcon :name="modelValue === label ? 'radio-active' : 'radio'" :size="16" />
		</span>
		<span class="qy-radio__label">
			<slot>{{ label }}</slot>
		</span>
	</label>
</template>
<script setup lang="ts">
import { nextTick } from 'vue'
import { QyIcon } from '../../index'
import { radioProps, radioEmits } from './radio'
import { CHANGE_EVENT } from './constants'
import { useRadio } from './use-radio'

defineOptions({ name: 'qy-radio' })

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { disabled, modelValue } = useRadio(props, emit)

const handleChange = () => {
	if (disabled.value) return
	modelValue.value = props.label
	nextTick(() => emit(CHANGE_EVENT, modelValue.value))
}
</script>
