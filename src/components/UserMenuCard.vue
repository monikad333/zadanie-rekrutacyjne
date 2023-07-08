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
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  /* margin-right: 0; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
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
