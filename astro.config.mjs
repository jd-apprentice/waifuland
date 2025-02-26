import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel';
import { loadEnv } from "vite";
const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
// https://github.com/withastro/astro/issues/4318
export default defineConfig({
    site: SITE_URL ?? "https://waifus.jonathan.com.ar",
    integrations: [auth()],
    adapter: vercel(),
});