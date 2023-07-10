<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

const fileInputRef = ref()

const triggerFileInput = () => {
  fileInputRef.value.click()
}

const handleFileChange = () => {
  const files = fileInputRef.value.files
  // Handle the selected file(s) as per your requirements
  console.log(files)
}
</script>

<template>
  <div class="input-area">
    <button @click="triggerFileInput">Choose File</button>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      class="form-control"
      ref="fileInput"
      type="file"
      multiple
      @change="handleFileChange"
    />
  </div>
</template>

<style scoped>
.input-area {
  /* width: 100%; */
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
}

input {
  margin: 10px;
  height: 100%;
  padding: 10px 2px;
  border: 1px dashed rgba(46, 89, 138, 0.836);
  border-radius: 2px;
}
</style>
