import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const supabaseUrl = useRuntimeConfig().public.SUPABASE_URL
  const supabaseAnonKey = useRuntimeConfig().public.SUPABASE_ANON_KEY

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Inject Supabase client globally in Nuxt 3
  nuxtApp.provide('supabase', supabase)
})
