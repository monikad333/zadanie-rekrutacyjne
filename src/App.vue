<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from '@/components/menu/SideMenu.vue'
import TopMenu from '@/components/menu/TopMenu.vue'
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
  width: 100vw;
  display: flex;
  position: absolute;
  padding-top: 80px;
  padding-right: 15px;
  padding-left: 15%;
}
</style>
