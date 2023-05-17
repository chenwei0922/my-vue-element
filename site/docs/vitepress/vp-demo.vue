<script setup lang="ts">
import { onMounted, computed, ref, defineAsyncComponent } from 'vue'

const props = defineProps({
	// 组件path
	src: { type: String, default: '' },
	// 组件内容
	codeStr: { type: String, default: '' },
	// pre内容
	htmlStr: { type: String, default: '' },
	// 行数
	lines: { type: [String, Number], default: null },
	// 语言
	lang: { type: String, default: null }
})
const showLine = computed(() => !!props.lines)
const lines = computed(() => {
	const numbers: number[] = []
	for (let i = 0; i < Number(props.lines); i++) {
		numbers.push(i + 1)
	}
	return numbers
})
const decoded = computed(() => {
	return `${decodeURIComponent(props.codeStr)}`
})
const deHtml = computed(() => {
	return `${decodeURIComponent(props.htmlStr)}` ?? ''
})
/* @vite-ignore */
const demoslot = props.src && defineAsyncComponent(() => import(props.src))
const visible = ref(false)
const hasHtml = computed(() => !!deHtml.value)

const toggleVisible = () => {
	visible.value = !visible.value
}
onMounted(() => {})
</script>
<template>
	<div class="qy-element-demo">
		<div class="demo-slot">
			<component :is="demoslot" v-if="demoslot" />
			<div v-else-if="decoded" class="demo-code" v-html="decoded" />
		</div>
		<div v-if="hasHtml" class="demo-icon">
			<span class="show-code" @click="toggleVisible">查看源码</span>
		</div>
		<div v-if="visible && hasHtml" class="demo-show">
			<div :class="`language-${lang} ${showLine ? 'line-numbers-mode' : ''}`">
				<button title="Copy Code" class="copy" />
				<span class="lang">{{ lang }}</span>
				<div v-html="deHtml" />
				<div v-if="showLine" class="line-numbers-wrapper">
					<template v-for="(item, index) in lines" :key="index">
						<span class="line-number">{{ item }}</span>
						<br />
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.qy-element-demo {
	padding: 20px;
	padding-bottom: 0;
	border: solid 1px var(--vp-c-divider);
	border-radius: 4px;
	margin: 10px 0;
}
.qy-element-demo > * {
	margin-bottom: 10px;
}
.demo-icon {
}
.demo-icon .show-code {
	cursor: pointer;
	font-size: 12px;
	color: #666;
}
.demo-slot {
}
.demo-show {
	border-radius: 4px;
	overflow: hidden;
	margin: 0 -20px;
}
.demo-show div[class*='language-'] {
	margin: 0 !important;
}
.demo-show [class*='language-'] :deep(pre),
.demo-show [class*='language-'] :deep(code) {
	tab-size: 2 !important;
}
</style>
