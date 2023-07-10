<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-content">
      <img class="bell" src="@/components/icons/bell.svg" alt="toggle" />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
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
  text-align: center;
}
.bell {
  width: 30px;
}
</style>
