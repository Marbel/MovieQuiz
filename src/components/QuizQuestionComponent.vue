<template>
  <div v-if="!$q.screen.lt.lg && $q.dark.isActive" class="cinema-screen fit">
    <div class="cinema">
      <img class="cinema-background" src="cinema_screen.png" />
      <transition name="slide-fade" mode="out-in">
        <img
          class="cinema-foreground"
          :key="quizStore.question.image"
          :src="quizStore.question.image"
        />
      </transition>
    </div>
  </div>
  <div class="column col-lg-6 col-12">
    <div class="col-6 fit">
      <div class="text-center">
        <h5>Which movie is it?</h5>
        <q-linear-progress
          size="25px"
          rounded
          track-color="transparent"
          :value="(quizStore.step + 1) / quizStore.questionCount"
          color="accent"
          class="no-pointer-events q-mb-sm"
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="accent"
              :label="`${quizStore.step + 1}/${quizStore.questionCount}`"
            />
          </div>
        </q-linear-progress>
        <q-img
          v-if="$q.screen.lt.lg || !$q.dark.isActive"
          :src="quizStore.question.image"
        ></q-img>
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <QuizAnswerComponentVue
          v-for="(answer, index) in quizStore.question.answers"
          :key="answer"
          v-model="quizStore.question.answers[index]"
          class="col-12 col-md-6 q-pa-md quizAnswer"
          @click="
            clickedIndex = index;
            btnAnimation = true;
          "
          :class="{
            right:
              answer.correctAnswer && btnAnimation && clickedIndex == index,
            wrong:
              !answer.correctAnswer && btnAnimation && clickedIndex == index,
          }"
          @animationend="
            btnAnimation = false;
            onAnswerClick(answer);
          "
        ></QuizAnswerComponentVue>
      </div>
    </div>
  </div>
</template>

<script setup>
import QuizAnswerComponentVue from "./QuizAnswerComponent.vue";
import { useQuizStore } from "../stores/quizStore";
import { useQuasar } from "quasar";
import { ref } from "vue";

const quizStore = useQuizStore();
const $q = useQuasar();

const btnAnimation = ref(false);
const clickedIndex = ref(0);

const onAnswerClick = (answer) => {
  quizStore.nextStep(answer.correctAnswer);
};
</script>

<style lang="sass">
.cinema-screen
  position: relative
  display: flex
  justify-content: center
  margin-bottom: -340px
  z-index: -1

.cinema
  width: 60%
  height: 86vh
  position: relative
  min-height: 630px
  .cinema-background
    position: absolute
    width: 100%
    height: 100%
  .cinema-foreground
    position: absolute
    top: 12.7%
    left: 21.9%
    width: 54.2%
    height: 49%

.slide-fade-enter-active
  transition: all 0.3s ease-out

.slide-fade-leave-active
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)


.slide-fade-enter-from,
.slide-fade-leave-to
  transform: translateX(20px)
  opacity: 0

.quizAnswer.right
    animation: flash-positive 1s
.quizAnswer.wrong
    animation: flash-negative 1s

@keyframes flash-positive
  0%
    background-color: transparent
  50%
    background-color: $positive
  100%
    background-color: transparent

@keyframes flash-negative
  0%
    background-color: transparent
  50%
    background-color: $negative
  100%
    background-color: transparent
</style>
