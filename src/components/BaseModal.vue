<script setup lang="ts">
defineProps(['modalActive'])
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <img @click="close" class="close-icon" src="./icons/close.svg" alt="close icon" />
          <!-- Modal Content -->
          <div class="modal-content">
            <h1><slot name="header" /></h1>
            <div class="yes-button">
              <slot />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

/* .modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
} */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #665b5b9c;
}
.modal-inner {
  position: relative;
  padding: 20px;
  max-width: 640px;
  width: 80%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 5px 5px rgba(90, 88, 88, 0.548);
}
.modal-content {
  margin: 2px;
}
.yes-button {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.close-icon {
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.3s;
  /* background-color: #641212; */
  border-radius: 50%;
  cursor: pointer;
}

.close-icon:hover {
  background-color: #0f440b54;
}
</style>
