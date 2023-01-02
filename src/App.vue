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
    <div class="space-y-5 divide-y">
      <div>
        <DataBinding />
      </div>
      <div>
        <Directives />
      </div>
      <div>
        <EventsAndMethods />
      </div>
    </div>
  </div>
</template>

<script setup>
import DataBinding from './components/DataBinding.vue';
import Directives from './components/Directives.vue';
import EventsAndMethods from './components/EventsAndMethods.vue';
</script>
