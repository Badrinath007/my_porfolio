export default {
  target: 'static',
  css: ["@/assets/css/main.css"],
  buildModules: ["@nuxt/postcss8", "nuxt-icon", "@nuxtjs/color-mode"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  colorMode: {
    classSuffix: "",
  },

  devtools: {
    enabled: true,
  },

  plugins: ["~/plugins/supabase.js"],
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  head: {
    title: 'Badrinath Ayyamperumal - Full Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Badrinath Ayyamperumal is a dedicated full-stack developer focused on creating efficient and scalable web applications. Explore my portfolio to see my skills and projects.' },
      { name: 'keywords', content: 'Badrinath Ayyamperumal, Full Stack Developer, Portfolio, Web Applications, JavaScript, Nuxt.js, Tailwind CSS, React, Python' },
      { name: 'author', content: 'Badrinath Ayyamperumal' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Badrinath Ayyamperumal - Full Stack Developer' },
      { property: 'og:description', content: 'Explore the portfolio of Badrinath Ayyamperumal, a full-stack developer with a passion for creating efficient and scalable web applications.' },
      { property: 'og:image', content: '/assets/images/portfolio.png' }, // Change to your portfolio image path
      { property: 'og:url', content: 'https://your-portfolio-url.com' }, // Change to your actual URL
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Badrinath Ayyamperumal - Full Stack Developer' },
      { property: 'twitter:description', content: 'Explore my projects and skills as a full-stack developer dedicated to delivering high-quality web applications.' },
      { property: 'twitter:image', content: '/assets/images/portfolio.png' } // Change to your portfolio image path
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }, // Change to your favicon path
    ],
  },
};
