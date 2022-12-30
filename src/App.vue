<template>
  <div
    id="app"
    class="
      flex flex-col
      items-center
      justify-between
      max-w-7xl
      my-0
      mx-auto
      p-8
    "
  >
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <div class="space-y-5">
      <DataBinding />
      <Directives />
    </div>
  </div>
</template>

<script setup>
import DataBinding from './components/DataBinding.vue';
import Directives from './components/Directives.vue';
</script>
