<script setup lang="ts">
import ProjectButton from '@/components/ProjectButton.vue'
</script>

<template>
  <p>User/User Edit</p>
  <div class="btns">
    <ProjectButton btn-color="rgb(197, 64, 64)" btn-content="delete"></ProjectButton>
    <ProjectButton btn-color="rgb(199, 156, 38)" btn-content="block"></ProjectButton>
    <ProjectButton btn-color="rgb(58, 75, 94)" btn-content="set password"></ProjectButton>
    <ProjectButton btn-color="rgb(39, 96, 160)" btn-content="save"></ProjectButton>
  </div>
</template>

<style scoped>
.btns {
  display: flex;
  position: absolute;
  padding-top: 80px;
  padding-right: 15px;
  right: 0%;
  gap: 10px;
}
</style>
