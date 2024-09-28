<template>
  <div class="text-white min-h-screen flex flex-col">
    

    <section class="py-16 px-4 lg:px-24">
      <h1 class="text-5xl font-bold text-center mb-8">About Me</h1>

      <div class="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        <img
          src="/assets/images/pro.png" 
          alt="Badrinath Ayyamperumal"
          class="w-40 h-40 rounded-full mx-auto lg:mx-0 lg:mr-8 shadow-lg"
        />
        <div class="mt-4 lg:mt-0">
          <h2 class="text-2xl font-semibold">Hi, I'm Badrinath!</h2>
          <p class="text-lg mt-2 text-white">
            I am a full-stack developer with a passion for creating efficient and scalable web applications. With a commitment to delivering high-quality results, I thrive on challenges and continuously seek opportunities to expand my skills.
          </p>
        </div>
      </div>

      <div class="mt-12">
        <h3 class="text-3xl font-bold text-center mb-4">My Skills</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="p-4 bg-white rounded-lg shadow-md text-center">
            <img src="/assets/icons/javascript.svg" alt="JavaScript" class="mx-auto mb-2 w-16 h-16" />
            <p class="text-lg text-black">JavaScript</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md text-center">
            <img src="/assets/icons/nuxtjs.svg" alt="Vue.js" class="mx-auto mb-2 w-16 h-16" />
            <p class="text-lg text-black">Nuxt.js</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md text-center">
            <img src="/assets/icons/tailwindcss.svg" alt="Tailwind CSS" class="mx-auto mb-2 w-16 h-16" />
            <p class="text-lg text-black">Tailwind CSS</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md text-center">
            <img src="/assets/icons/nodejs.svg" alt="Node.js" class="mx-auto mb-2 w-16 h-16" />
            <p class="text-lg text-black">Node.js</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <h3 class="text-3xl font-bold mb-4">A Bit More About Me</h3>
        <p class="text-lg text-gray-100 mb-4">
          When I'm not coding, you can find me exploring new technologies, hiking, or diving into a good book. I believe in lifelong learning and am always excited to take on new challenges!
        </p>
        <nuxt-link to="/contact" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get in Touch
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // Any necessary script code can go here
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
