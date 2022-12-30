<template>
  <h1>Meu Componente de {{ componentName }}</h1>
  <input type="text" v-model="componentName" />
</template>

<script>
export default {
  name: 'DataBinding',

  data() {
    return {
      componentName: 'Data Binding',
    };
  },
};
</script>
