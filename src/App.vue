<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ImageSearch from './components/ImageSearch.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <ImageSearch />
</template>

<style>
:root {
  --gray: #a7aebc;
  --lightgray: #dde2e9;
  --slategray: #3a3d42;
  --darkgray: #999393;
  --lavender: #e7e9ed;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

ul,
ol,
li {
  list-style: none;
}
</style>
