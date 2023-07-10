<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  leftContent: string
  rightContent: string
}>()

const isActive = ref(false)

const changeCard = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="main-card mb-4 border-b border-gray-200 border-gray-700 rounded-sm">
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 text-gray-400 border-gray-700"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 hover:text-gray-300"
            >{{ leftContent }}</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active text-blue-500 border-blue-500"
            aria-current="page"
            >{{ rightContent }}</a
          >
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="top"><slot name="top" /></div>
      <div class="bottom bg-white">
        <slot name="bottom" class="h-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-card {
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 85vh;
  border: 1px solid gray;
  background-color: #fff;
}

.header {
  display: flex;
  align-items: center;
  padding: 5px;
  height: 5%;
  width: 100%;
  background-color: #d8cfcf77;
  border-bottom: 1px solid gray;
  font-size: 15px;
}

.content {
  width: 100%;
  height: 100%;
}
p {
  margin-left: 10px;
}

.underline {
  display: flex;
  margin: 40px 0 0 0px;
  width: 100px;
  height: 5px;
  background-color: blue;
}

.top {
  background-color: #afafaf21;
}
</style>
