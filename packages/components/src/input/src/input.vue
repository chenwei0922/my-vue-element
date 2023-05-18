<template>
	<div
		ref="inputRef"
		:class="type === 'textarea' ? 'qy-textarea' : 'qy-input'"
		@mouseenter="hovering = true"
		@mouseleave="hovering = false"
	>
		<template v-if="type !== 'textarea'">
			<div :class="['qy-input__wrapper', { disabled: disabled }]">
				<span v-if="hasPrefix" class="qy-input__prefix">
					<slot name="prefixIcon">
						<QyIcon v-if="prefixIcon" :name="prefixIcon" :size="15" />
					</slot>
				</span>
				<input
					ref="input"
					v-model="model"
					:size="1"
					:maxlength="maxlength"
					:readonly="readonly"
					class="qy-input__inner"
					:type="showPassword && !passwordVisible ? 'password' : type"
					:disabled="disabled"
					:placeholder="showPlaceholder ? placeholder : ''"
					autocomplete="off"
					@input="handleInput"
					@focus="handleFocus"
					@blur="handleBlur"
					@change="handleChange"
				/>
				<span v-if="hasSuffix" class="qy-input__suffix">
					<slot name="suffixIcon">
						<QyIcon v-if="suffixIcon" :name="suffixIcon" :size="15" />
					</slot>
					<QyIcon v-if="showClear" name="circle-close" :size="15" @click.stop="clear" />
					<QyIcon
						v-if="showPwdVisible"
						:name="passwordVisible ? 'eye' : 'eye-close'"
						:size="15"
						@click="handlePasswordVisible"
					/>
					<span v-if="showWordLimitVisible" class="wordlimit">{{ textLength }} / {{ maxlength }}</span>
				</span>
			</div>
		</template>
		<template v-else>
			<textarea
				ref="textarea"
				v-model="model"
				:style="textareaCalcStyle"
				size="1"
				:rows="rows"
				:maxlength="maxlength"
				:readonly="readonly"
				class="qy-textarea__inner"
				:disabled="disabled"
				:placeholder="showPlaceholder ? placeholder : ''"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
			/>
			<span v-if="showWordLimitVisible" class="wordlimit">{{ textLength }} / {{ maxlength }}</span>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { inputProps } from './input'
import { computed, inject, nextTick, onMounted, ref, shallowRef, useSlots, watch } from 'vue'
import { calcTextareaHeight } from './utils'
import { QyIcon } from '../../index'
import { useLocale } from '@chenwei02/hooks'
const { t } = useLocale()

defineOptions({ name: 'qy-input' })

const props = defineProps(inputProps)
const emit = defineEmits(['update:modelValue', 'change', 'input', 'blur', 'focus', 'clear'])

// 表单规则验证，当blur时
const formItem = inject('formItemKey', undefined)!

const slots = useSlots()
const passwordVisible = ref(false)
const hovering = ref(false)
const isfocus = ref(false)
const model = computed({
	get() {
		return props.modelValue
	},
	set(val) {
		emit('update:modelValue', val)
	}
})
const placeholder = computed(() => props.placeholder ?? t(`qy.input.placeholder`))
const showPlaceholder = computed(() => !props.disabled)
const showPwdVisible = computed(() => props.showPassword && !props.disabled && !!model.value)
const showClear = computed(
	() => props.clearable && !props.disabled && !!model.value && (hovering.value || isfocus.value)
)
const showWordLimitVisible = computed(() => props.showWordLimit && !!props.maxlength && !props.disabled)
const hasSuffix = computed(() => {
	return showClear.value || showPwdVisible.value || showWordLimitVisible.value || !!props.suffixIcon || slots.suffixIcon
})
const hasPrefix = computed(() => !!props.prefixIcon || slots.prefixIcon)
const nativeInputValue = computed(() => String(props.modelValue) ?? '')
const textLength = computed(() => nativeInputValue.value.length)
const inputRef = ref(null)
const input = shallowRef()
const textarea = shallowRef()
const _ref = computed(() => input.value || textarea.value)
const textareaCalcStyle = shallowRef({})

const handlePasswordVisible = () => {
	passwordVisible.value = !passwordVisible.value
}
const handleInput = e => {
	const { value } = e.target
	emit('update:modelValue', value)
	emit('input', value)
}

const handleFocus = e => {
	if (props.disabled || props.readonly) return

	isfocus.value = true
	emit('focus', e)
}
const handleBlur = e => {
	if (props.disabled || props.readonly) return
	isfocus.value = false
	emit('blur', e)
	if (props.validateEvent) {
		formItem?.validate?.('blur')
	}
}
const handleChange = e => {
	emit('change', e.target.value)
}
const focus = () => {
	_ref.value?.focus()
}
const blur = () => {
	_ref.value?.blur()
}
const clear = e => {
	emit('update:modelValue', '')
	emit('change', '')
	emit('clear')
	emit('input', '')
}
const resizeTextarea = () => {
	const { type, autosize } = props
	if (type !== 'textarea' || !textarea.value) return
	if (autosize) {
		const minRows = typeof autosize === 'object' ? autosize.minRows : undefined
		const maxRows = typeof autosize === 'object' ? autosize.maxRows : undefined
		textareaCalcStyle.value = {
			...calcTextareaHeight(textarea.value, minRows, maxRows)
		}
	}
}
onMounted(() => {
	nextTick(() => resizeTextarea())
})
watch(
	() => props.modelValue,
	() => {
		nextTick(() => resizeTextarea())
	}
)
defineExpose({
	focus,
	blur,
	inputRef,
	input
})
</script>
