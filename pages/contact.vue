<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-10 text-white">Contact Me</h2>
      <div class="max-w-xl mx-auto">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-lg mb-2 text-white" for="name">Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-lg mb-2 text-white" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-lg mb-2 text-white" for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <p class="text-white text-center mt-5" v-if="submitted">Message Sent successfully. Thank you for contacting us!</p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$supabase);  // This should output the Supabase client
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    async submitForm() {
      const { data, error } = await this.$supabase
        .from('schema')
        .insert([{ name: this.name, email: this.email, message: this.message }]);
      
      if (!error) {
        this.submitted = true;
        this.name = '';
        this.email = '';
        this.message = '';
        console.log('Data inserted successfully:', data);

        // Refresh the page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 3000); // 3 seconds delay before refresh
      } else {
        console.error('Error inserting data:', error);
      }
    }
  }
}
</script>

<style scoped>
/* You can add additional styles if needed */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem; /* Adjust padding for mobile */
    padding-right: 1rem; /* Adjust padding for mobile */
  }
}

input,
textarea {
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3b82f6; /* Change border color on focus */
}
</style>
