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
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 1px; */
  min-width: 50px;
  height: 20px;
  border-radius: 2px;
  border: none;
  transition: 0.3s;
}

.btn:hover {
  cursor: pointer;
}

.btn__content {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
</style>
