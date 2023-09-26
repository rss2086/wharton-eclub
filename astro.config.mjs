import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import react from "@astrojs/react";
import basicSsl from '@vitejs/plugin-basic-ssl'


const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [ storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      team: 'storyblok/TeamPage',
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page',
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us', // optional,  or 'eu' (default)
    },
  }), tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});