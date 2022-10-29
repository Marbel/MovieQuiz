<template>
  <q-btn outline flat color="primary" :label="modelValue.text" />
</template>

<script setup>
const prop = defineProps({
  modelValue: Object,
});
</script>
