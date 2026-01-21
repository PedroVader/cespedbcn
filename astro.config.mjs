import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://cespedbcn.com',
  integrations: [
    tailwind(), // <--- ESTO ES LO QUE ACTIVA EL ARCHIVO QUE ACABAS DE CREAR
    sitemap()
  ],
  build: {
    format: 'directory'
  }
});