<script setup lang="ts">
import ProjectButton from '@/components/ProjectButton.vue'
import DefaultCard from '@/components/DefaultCard.vue'
</script>

<template>
  <div class="view">
    <div class="row">
      <div class="user">
        <p class="user-edit">User / User Edit</p>
        <h1 class="username">Hugh Jackman</h1>
      </div>
      <div class="btns">
        <ProjectButton btn-color="rgb(197, 64, 64)" btn-content="delete"></ProjectButton>
        <ProjectButton btn-color="rgb(199, 156, 38)" btn-content="block"></ProjectButton>
        <ProjectButton btn-color="rgb(58, 75, 94)" btn-content="set password"></ProjectButton>
        <ProjectButton btn-color="rgb(39, 96, 160)" btn-content="save"></ProjectButton>
      </div>
    </div>
    <div class="row">
      <DefaultCard class="card"></DefaultCard>
      <DefaultCard class="card"></DefaultCard>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-right: 15px;
  gap: 10px;
}
.row {
  display: flex;
}
.btns {
  display: flex;
  justify-content: flex-end;
  right: 0%;
  gap: 10px;
  width: 50%;
}
.user {
  padding-left: 20px;
  width: 50%;
  justify-content: flex-start;
}

.user-edit {
  font-size: 10px;
  color: rgb(68, 68, 68);
}

.username {
  color: royalblue;
}
.card {
  padding: 10px;
  width: 50%;
}
</style>
