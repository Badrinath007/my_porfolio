<template>
  <div class="border border-gray-300 rounded-lg p-4 bg-gray-800 text-white items-start">
    <img :src="image" alt="Project Image" class="rounded-md mb-4" />
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-400 mb-2">{{ description }}</p>
    <a
      :href="url"
      target="_blank"
      class="text-blue-500 transition duration-500 hover:scale-y-150 hover: flex"
      >Visit Project</a
    >
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  url: String,
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
