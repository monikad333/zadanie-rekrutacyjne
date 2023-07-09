<script setup lang="ts"></script>

<template>
  <div class="main-card">
    <div class="header">header</div>
    <div class="content">content</div>
  </div>
</template>

<style scoped>
.main-card {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 80%;
}

.header {
  top: 20px;
  width: 100%;
  background-color: #b8b8b8;
}

.content {
  background-color: #e0e0e0;
}
</style>
