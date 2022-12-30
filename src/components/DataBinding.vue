<template>
  <h1 class="text-3xl font-bold">
    Meu Componente <span :class="textDecoration">{{ componentName }}</span>
  </h1>
  <div class="mt-5">
    <label for="input-component" class="block text-sm font-medium text-gray-700"
      >Name of this component</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="input-component"
        id="input-component"
        class="
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-500 focus:ring-indigo-500
          sm:text-sm
        "
        placeholder="Your text goes here"
        v-model="componentName"
      />
    </div>
  </div>

  <a
    target="blank"
    class="
      mt-5
      inline-flex
      items-center
      rounded-full
      border border-transparent
      bg-ogreen-400
      px-5
      py-2
      text-base
      font-medium
      text-white
      shadow-sm
      hover:bg-bluewood-800
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    "
    :href="courseLink"
    >Link do Curso</a
  >
</template>

<script>
export default {
  name: 'DataBinding',

  data() {
    return {
      componentName: 'Data Binding',
      textDecoration: 'underline',
      courseLink:
        'https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado',
    };
  },
};
</script>
