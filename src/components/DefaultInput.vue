<script setup lang="ts">
defineProps<{
  label: string
  inputType: string
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()
</script>

<template>
  <div class="input-area">
    <label for="text" class="text-xs">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      :type="inputType"
    />
  </div>
</template>

<style scoped>
.input-area {
  /* width: 100%; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
input {
  margin-top: 2px;
  padding: 2px;
  border: 1px solid rgba(124, 124, 124, 0.568);
  border-radius: 2px;
}
</style>
