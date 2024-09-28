<template>
  <div>
    <section class="skills">
      <h2 class="text-4xl animate-fadeIn text-center text-white">Skills</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 items-center text-center">
        <skillcard
          v-for="skill in skills"
          :key="skill.id"
          :title="skill.title"
          :image="skill.image"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import skillcard from "~/components/skillcard.vue";

const skills = [
  { id: 1, title: "JavaScript", image: "/image/age_icon.png" },
  { id: 2, title: "React", image: "/image/react_icon.png" },
  { id: 3, title: "Nuxt.js", image: "/image/nuxt-js.png" },
  { id: 4, title: "Tailwind CSS", image: "/image/tailwindcss.png" },
  { id: 5, title: "Node.js", image: "/image/nodejs_icon.png" },
  { id: 6, title: "GitHub", image: "/image/github.png" },
  { id: 7, title: "Python", image: "/image/python_icon.png" },
  { id: 8, title: "MongoDb", image: "/image/mongodb_icon.png" },
  { id: 9, title: "Supabase", image: "/image/supabase-.png" },
  { id: 10, title: "Firebase", image: "/image/firebase_icon.png" },
  { id: 11, title: "Flask", image: "/image/flask_icon.png" },
  { id: 12, title: "Netlify", image: "/image/netlify.png" },
  { id: 13, title: "Figma", image: "/image/figma_icon.png" },
  { id: 14, title: "Canva", image: "/image/canva_icon.png" },
  { id: 15, title: "Adobe XD", image: "/image/xd_icon.png" },
  { id: 16, title: "Notion", image: "/image/notion_icon.png" },
  { id: 17, title: "Ubuntu", image: "/image/ubuntu_icon.png" },
];
</script>

<style scoped>
.skills {
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out;
}
</style>
