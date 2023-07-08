<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import CurrentDate from '@/components/CurrentDate.vue'

const isSideBarOpen = ref(false)

const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value
}
</script>

<template>
  <div @click="toggleSideBar" class="btn">
    <img src="./icons/burger.svg" alt="toggle menu" />
  </div>
  <div class="menu" :class="{ open: isSideBarOpen }">
    <CurrentDate />
    <div class="elements">
      <ul class="menu-items">
        <li class="item-title"><img src="./icons/graph.svg" alt="graph icon" />Statistics</li>
        <li class="item-title">
          <img src="./icons/users.svg" alt="users icon" />
          Users
          <ul class="inside-items">
            <li>User List</li>
            <li>User Edit</li>
            <li>Roles and Permissions</li>
            <li>Settings</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15%;
  background-color: rgb(255, 255, 255);
  transition: 0.3s;
  transform: translateX(-100%);
}

.menu.open {
  transform: translateX(0);
}

img {
  padding: 10px;
  margin: 10px 20px;
  width: 50px;
  transition: 0.3s;
  color: gray;
}

.btn {
  position: absolute;
  width: 15%;
  z-index: 10;
}

.btn img:hover {
  background-color: rgba(151, 105, 20, 0.467);
  border-radius: 20%;
  cursor: pointer;
}

.elements {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  white-space: nowrap;
}
.statistics {
  display: flex;
  flex-direction: row;
}

.menu-items {
  list-style: none;
  transform: translate(-10%);
}

.menu-items img {
  transform: translate(-50%);
}
.item-title {
  color: rgba(0, 0, 0, 0.63);
  transform: translate(-5%);
}
.inside-items {
  list-style: inside;
}

@media (max-width: 768) {
  .btn {
    padding: 2px;
    width: 20px;
  }

  .btn:hover {
    border-radius: 20%;
  }
}

@media (max-width: 1200px) {
  .menu {
    width: 30%;
  }
}
</style>
