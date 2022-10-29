<template>
  <router-view />
</template>

<script setup>
import { useQuizStore } from "stores/quizStore";
import { useQuasar } from "quasar";

const quizStore = useQuizStore();
const $q = useQuasar();
$q.dark.set(quizStore.darkMode);
</script>
