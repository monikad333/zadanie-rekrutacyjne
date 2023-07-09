<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

defineProps<{
  cardContent: string
}>()
</script>

<template>
  <div class="card">
    <div class="card-content">
      <p class="content">{{ cardContent }}</p>
      <span><img class="arrow" src="@/components/icons/arrow.svg" alt="toggle" /></span>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  height: 100%;
  border-left: 1px solid rgba(128, 128, 128, 0.514);
  transition: 0.3s;
  z-index: 5;
}

.card:hover {
  background-color: rgba(128, 128, 128, 0.589);
  cursor: pointer;
}
.card-content {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.content {
  padding-right: 10px;
}
.arrow {
  width: 10px;
  z-index: 100;
}
</style>
