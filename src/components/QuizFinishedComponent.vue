<template>
  <div>
    <h4>Finished</h4>
    <h4>Points: {{ quizStore.points }}</h4>
    <q-btn label="Reset" @click="quizStore.resetQuiz"></q-btn>
  </div>
</template>

<script setup>
import { useQuizStore } from "../stores/quizStore";

const quizStore = useQuizStore();
</script>
