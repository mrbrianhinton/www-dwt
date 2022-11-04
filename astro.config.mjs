import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://designwiththought.com",
	integrations: [
		mdx({}),
		image(),
		sitemap(),
	],
});