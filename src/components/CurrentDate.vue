<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

// onMounted(() => {
const dayOfWeekName = ref('')
const monthName = ref('')
const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const dayOfWeek = today.getDay()
const day = today.getDate()

dayOfWeekName.value = today.toLocaleDateString('pl-PL', { weekday: 'long' })
monthName.value = today.toLocaleDateString('pl-PL', { month: 'long' })
// })
</script>

<template>
  <div class="date">
    <p class="date-element">{{ dayOfWeekName }}</p>
    <h2 class="date-element">{{ day + ' ' + monthName }}</h2>
    <p class="date-element">{{ year }}</p>
    <hr />
  </div>
</template>

<style scoped>
p {
  color: rgb(117, 114, 114);
}

.date-element {
  padding-top: 5px;
}

.date {
  padding: 35% 10%;
}

hr {
  margin-top: 10%;
  border: 1px solid rgba(0, 0, 0, 0.514);
}
</style>
