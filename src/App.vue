<script setup>
import TiBtn from "./components/TiBtn.vue"
</script>

<template>
  <div id="app">
    <el-config-provider>
      <TiBtn />
      <router-view id="router-view" />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Microsoft YaHei";
  padding: -10px;
  background-color: var(--el-bg-color);
}
</style>
