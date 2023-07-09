<script setup lang="ts">
defineProps<{
  btnContent: string
  btnColor: string
}>()

</script>

<template>
  <button type="button" class="btn__content btn">
    {{ btnContent }}
  </button>
</template>

<style scoped>

button {
  background-color: v-bind(btnColor);
}
.btn {
  padding: 10px;
  min-width: 120px;
  height: 50px;
  border-radius: 10px;
  transition: 0.3s;
}

.btn:hover {
  cursor: pointer;
}

.btn__content {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  
}
</style>
