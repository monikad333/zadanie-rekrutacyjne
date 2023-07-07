<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import CurrentDate from '@/components/CurrentDate.vue'
</script>

<template>
  <div class="menu">
    <div class="btn">
      <img src="./icons/burger-menu-svgrepo-com.svg" alt="toggle menu" />
    </div>
    <CurrentDate />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15%;
  background-color: rgb(255, 255, 255);
}

img {
  margin: 10px 20px;
  width: 15%;
}

img:hover {
  fill: #be6318;
  background-color: #2137;
  cursor: pointer;
}
</style>
