import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "D&D Witchlight Adventure",
      social: {
        github: "https://github.com/Spronghi/dnd-witchlight-campaign",
      },
      logo: {
        src: "./src/assets/logo.png",
      },
      sidebar: [
        { label: "Home", link: "/" },
        { label: "Sessions", autogenerate: { directory: "sessions" } },
        { label: "NPCs", autogenerate: { directory: "npc" } },
        { label: "Places", autogenerate: { directory: "places" } },
      ],
    }),
  ],
});
