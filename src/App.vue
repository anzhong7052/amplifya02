<template>
  <el-config-provider :locale="ja">
      <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import ja from 'element-plus/es/locale/lang/ja';
</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';
</style>