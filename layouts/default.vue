<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-r from-black via-blue-600 to-gray-500 text-gray-800"
  >
    <Header />
    <!-- Main content (injected via NuxtPage in App.vue) -->
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>


