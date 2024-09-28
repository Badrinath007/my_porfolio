<template>
  <div class="border border-gray-300 rounded-lg p-4 bg-gray-800 text-white flex flex-col items-center">
    <!-- Render skill image -->
    <img :src="image" alt="Skill Image" class="rounded-md mb-4 w-10 h-10 md:w-20 md:h-20 object-contain" />
    <!-- Render skill title -->
    <h3 class="text-lg md:text-xl font-bold text-center">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: String, // Skill title prop
  image: String
});
</script>

<style scoped>
/* Optional: Add specific styling for skill cards if needed */
</style>
