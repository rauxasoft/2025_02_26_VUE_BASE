<template>
  <NavBar />
  <hr>
  <router-view />   <!-- Donde se ancla la vista -->
</template>

<script setup lang="ts">
  import NavBar from './components/NavBar.vue'
</script>

<style scoped>

</style>