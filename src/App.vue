<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <div class="container mt-5">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>
