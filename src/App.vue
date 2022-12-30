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
    <DataBinding />
  </div>
</template>

<script setup>
import DataBinding from './components/DataBinding.vue';
</script>
