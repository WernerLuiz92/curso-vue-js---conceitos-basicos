<template>
  <h1 class="text-3xl font-bold">V-Focus</h1>
  <input type="text" v-focus />
</template>

<script>
const focus = {
  mounted: (el) => el.focus(),
};

export default {
  name: 'Directives',

  directives: {
    focus,
  },
};
</script>
