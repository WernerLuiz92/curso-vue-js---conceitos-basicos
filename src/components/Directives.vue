<template>
  <h1 class="text-3xl font-bold">Minha Lista</h1>
  <ul class="mt-5">
    <li
      @click="task.isDone = !task.isDone"
      :class="['flex items-center', task.isDone ? 'line-through' : '']"
      v-for="(task, index) in tasks"
      :key="`${task.name}-${index}`"
    >
      <CheckIcon class="w-5 h-5" v-if="task.isDone" />
      <XMarkIcon class="w-5 h-5" v-else />
      {{ task.name }}
    </li>
  </ul>
</template>

<script>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid';
export default {
  name: 'Directives',

  components: {
    CheckIcon,
    XMarkIcon,
  },

  data() {
    return {
      tasks: [
        { name: 'Fazer o curso', isDone: false },
        { name: 'Almoçar', isDone: false },
      ],
    };
  },
};
</script>
