<script lang="ts" setup></script>

<template>
  <div>按钮组件</div>
  <qy-button type="primary">哈哈哈</qy-button>
  <qy-button type="primary" text>哈哈哈</qy-button>
  <div>面包屑组件</div>
  <qy-breadcrumb separator="/">
    <qy-breadcrumb-item :to="{ path: '/' }">homepage</qy-breadcrumb-item>
    <qy-breadcrumb-item>promotion detail</qy-breadcrumb-item>
  </qy-breadcrumb>
</template>
