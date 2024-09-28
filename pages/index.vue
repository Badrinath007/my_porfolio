<template>
  <!-- Main Content - centered vertically and horizontally -->
  <div class="flex flex-col items-center justify-center min-h-screen py-32">
    <div class="relative z-10 container mx-auto px-4 py-16 text-center">
      <!-- Intro content -->
      <div
        class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
      >
        <!-- Image -->
        <img
          src="/assets/images/pro.png"
          alt="Profile Image"
          class="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 border-4 border-white shadow-lg"
        />

        <!-- Text -->
        <div class="text-white px-4 max-w-full sm:max-w-lg text-left">
          <!-- Change text-center to text-left -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm Badrinath Ayyamperumal
          </h1>
          <p class="text-sm sm:text-base md:text-lg">
            A dedicated full-stack developer with a strong focus on creating
            efficient and scalable web applications. My portfolio features
            projects that highlight my expertise and commitment to delivering
            high-quality results. As a self-motivated and versatile
            professional, I thrive on challenges and continuously seek
            opportunities to expand my knowledge and skills. My positive
            attitude and growth mindset enable me to approach each project with
            enthusiasm and determination, fostering collaboration and
            innovation. I invite you to explore my projects to learn more about
            my work. I look forward to the possibility of contributing to
            meaningful projects and achieving great results together.
          </p>
        </div>
      </div>
    </div>
  </div> 
  
</template>

<style scoped>
/* Optional: Background styling for better visibility */
.bg-gray-800 {
  background-color: #2d3748; /* Change background color */
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .py-32 {
    padding-top: 8rem; /* Adjust top padding for small screens */
    padding-bottom: 8rem; /* Adjust bottom padding for small screens */
  }
}
</style>


