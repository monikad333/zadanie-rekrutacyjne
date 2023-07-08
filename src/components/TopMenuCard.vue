<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

defineProps<{
  cardContentTop: string
  cardContentBottom: string
}>()
</script>

<template>
  <div class="cards">
    <div class="card">
      <div class="card-content">
        <p class="top">{{ cardContentTop }}</p>
        <p class="bottom">{{ cardContentBottom }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .cards {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
} */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  /* margin: 5px; */
  height: 100%;
  border-left: 1px solid rgba(128, 128, 128, 0.514);
  border-right: 1px solid rgba(128, 128, 128, 0.514);
  transition: 0.3s;
  z-index: 5;
}

.card:hover {
  background-color: rgba(128, 128, 128, 0.589);
  cursor: pointer;
}
.card-content {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.top {
  text-transform: uppercase;
  color: rgb(129, 127, 127);
  font-size: 10px;
}

.bottom {
  font-size: 13px;
}
</style>
