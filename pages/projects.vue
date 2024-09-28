<template>
  <div>
    <section class="projects">
      <h2 class="text-4xl animate-fadeIn text-white text-center">My Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :url="project.url"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Card from "~/components/card.vue";
import projectsData from "~/data/projects.json";

const projects = projectsData; // Assuming your projects data is in JSON format
</script>

<style scoped>
.projects {
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out;
}
</style>
