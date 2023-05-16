<script setup lang="ts">
import { onMounted, computed, ref, defineAsyncComponent } from 'vue'

const props = defineProps({
	src: { type: String, default: '' },
	codeStr: { type: String, default: '' },
	htmlStr: { type: String, default: '' }
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
			<div v-else class="demo-code" v-html="decoded" />
		</div>
		<div v-if="hasHtml" class="demo-icon">
			<span class="show-code" @click="toggleVisible">查看源码</span>
		</div>
		<div v-if="visible && hasHtml" class="demo-show" v-html="deHtml" />
	</div>
</template>

<style scoped>
.qy-element-demo {
	padding: 20px;
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
.demo-show >>> pre {
	overflow: auto;
	position: relative;
	padding: 10px;
	tab-size: 2;
}
</style>
