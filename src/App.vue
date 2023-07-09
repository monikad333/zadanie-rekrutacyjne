<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import TopMenu from '@/components/TopMenu.vue'
</script>

<template>
  <div>
    <SideMenu></SideMenu>
    <TopMenu></TopMenu>
    <router-view class="view"></router-view>
  </div>
</template>

<style scoped>
div {
  display: flex;
}
.view {
  display: flex;
  position: absolute;
  padding-top: 80px;
  padding-right: 15px;
  right: 0%;
  gap: 10px;
}
</style>
