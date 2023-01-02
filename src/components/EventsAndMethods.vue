<template>
  <h1 class="text-3xl font-bold">Minha Lista</h1>
  <ul class="mt-5">
    <li
      @click="completeTask(task)"
      :class="['flex items-center', task.isDone ? 'line-through' : '']"
      v-for="(task, index) in tasks"
      :key="`${task.name}-${index}`"
    >
      <CheckCircleIcon class="w-5 h-5" v-if="task.isDone" />
      <MinusCircleIcon class="w-5 h-5" v-else />
      {{ task.name }}
      <XCircleIcon class="w-5 h-5" @click.stop="removeTask(task)" />
    </li>
  </ul>
</template>

<script>
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline';
export default {
  name: 'Directives',

  components: {
    CheckCircleIcon,
    MinusCircleIcon,
    XCircleIcon,
  },

  data() {
    return {
      tasks: [
        { name: 'Fazer o curso', isDone: false },
        { name: 'Almoçar', isDone: false },
      ],
    };
  },

  methods: {
    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.name !== task.name);
    },

    completeTask(task) {
      this.tasks.find((t) => t.name == task.name).isDone = !task.isDone;
    },
  },
};
</script>
