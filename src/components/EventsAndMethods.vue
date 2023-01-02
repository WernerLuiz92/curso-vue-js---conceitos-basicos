<template>
  <h1 class="text-3xl font-bold">Minha Lista</h1>
  <div class="mt-5">
    <label for="newTask" class="block text-sm font-medium text-gray-700"
      >Add nova tarefa</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="newTask"
        id="newTask"
        class="
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-ogreen-500 focus:ring-ogreen-500
          sm:text-sm
        "
        placeholder="Nova tarefa"
        v-model="newTask"
        v-focus
        @keyup.enter="addTask"
      />
    </div>
  </div>
  <ul class="mt-5">
    <li
      @click="completeTask(task)"
      :class="[
        'flex items-center cursor-pointer',
        task.isDone ? 'line-through' : '',
      ]"
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

const focus = {
  mounted: (el) => el.focus(),
};

export default {
  name: 'EventsAndMethods',

  directives: {
    focus,
  },

  components: {
    CheckCircleIcon,
    MinusCircleIcon,
    XCircleIcon,
  },

  data() {
    return {
      newTask: '',
      tasks: [
        { name: 'Fazer o curso', isDone: false },
        { name: 'Almoçar', isDone: false },
      ],
    };
  },

  methods: {
    addTask() {
      this.tasks.push({
        name: this.newTask,
        isDone: false,
      });
      this.newTask = '';
    },

    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.name !== task.name);
    },

    completeTask(task) {
      this.tasks = this.tasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, isDone: !t.isDone };
        }
        return { ...t };
      });
    },
  },
};
</script>
