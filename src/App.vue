<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 container mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
