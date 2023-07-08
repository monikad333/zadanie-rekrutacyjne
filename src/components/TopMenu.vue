<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopMenuCard from './TopMenuCard.vue'
import UserMenuCard from './UserMenuCard.vue'
</script>

<template>
  <div class="main-bar">
    <div class="card-section">
      <TopMenuCard card-content-top="zlecenia" card-content-bottom="245"></TopMenuCard>
      <TopMenuCard card-content-top="depozyty" card-content-bottom="245"></TopMenuCard>
      <TopMenuCard card-content-top="zamówienia" card-content-bottom="245"></TopMenuCard>
    </div>
    <div class="left-section">
      <UserMenuCard card-content="Warsztat A12"></UserMenuCard>
    </div>
  </div>
</template>

<style scoped>
.main-bar {
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
  background-color: #fff;
  /* z-index: -1; */
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.card-section {
  /* position: absolute; */
  display: flex;
  margin-left: 15%;
}
.left-section {
  display: flex;
  right: 0%;
}
</style>
