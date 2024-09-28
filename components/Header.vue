<template>
  <header class="text-white py-4 flex flex-col">
    <nav class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <img class="w-10 h-10" src="/assets/images/portfolio.png" alt="Logo"/>

      <!-- Hamburger Menu for Mobile Screens -->
      <button
        @click="menuOpen = !menuOpen"
        class="block md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Navigation Links for Larger Screens -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <nuxt-link to="/" class="transition duration-500 hover:scale-125 hover: flex">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="transition duration-500 hover:scale-125 hover: flex">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/skills" class="transition duration-500 hover:scale-125 hover: flex">Skills</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects" class="transition duration-500 hover:scale-125 hover: flex">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="transition duration-500 hover:scale-125 hover: flex">Contact</nuxt-link>
        </li>
      </ul>

      <!-- Mobile Navigation Links -->
      <ul
        v-show="menuOpen"
        class="flex flex-col items-center absolute top-16 left-0 w-full bg-gray-800 md:hidden space-y-4 py-6"
      >
        <li>
          <nuxt-link @click="menuOpen = false" to="/" class="transition duration-500 hover:scale-125 hover: flex">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link @click="menuOpen = false" to="/about" class="transition duration-500 hover:scale-125 hover: flex">About</nuxt-link>
        </li>
        <li>
          <nuxt-link @click="menuOpen = false" to="/skills" class="transition duration-500 hover:scale-125 hover: flex">Skills</nuxt-link>
        </li>
        <li>
          <nuxt-link @click="menuOpen = false" to="/projects" class="transition duration-500 hover:scale-125 hover: flex">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link @click="menuOpen = false" to="/contact" class="transition duration-500 hover:scale-125 hover: flex">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// Mobile menu state
const menuOpen = ref(false);
</script>

<style scoped>
/* Additional styling */
button {
  padding: 0.5rem;
  border-radius: 0.375rem;
}

ul {
  transition: transform 0.3s ease-in-out;
}
</style>
