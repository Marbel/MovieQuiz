<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="transparent">
      <q-toolbar class="justify-center text-primary">
        <q-toolbar-title class="col-shrink" shrink>
          Movie Quiz
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="transparent">
      <q-toolbar class="justify-end text-primary q-gutter-x-sm">
        <q-btn
          flat
          :icon="quizStore.darkMode ? 'light_mode' : 'dark_mode'"
          @click="quizStore.toggleDarkMode"
        >
        </q-btn>
        <div class="text-caption q-pr-sm">Author: Moebis, Jan-Andre</div>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useQuizStore } from "../stores/quizStore";

const quizStore = useQuizStore();
</script>
