<template>
  <q-page class="flex flex-center justify-center row">
    <QuizQuestionComponentVue
      v-if="!quizStore.finished"
    ></QuizQuestionComponentVue>
    <QuizFinishedComponentVue
      v-if="quizStore.finished"
    ></QuizFinishedComponentVue>
  </q-page>
</template>

<script setup>
import QuizQuestionComponentVue from "../components/QuizQuestionComponent.vue";
import QuizFinishedComponentVue from "src/components/QuizFinishedComponent.vue";
import { useQuizStore } from "../stores/quizStore";

const quizStore = useQuizStore();
</script>
