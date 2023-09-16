import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "The Witchlight",
      social: {
        github: "https://github.com/Spronghi/dnd-witchlight-campaign",
      },
      sidebar: [
        { label: "Sessions", autogenerate: { directory: "sessions" } },
        { label: "NPCs", autogenerate: { directory: "npc" } },
        { label: "Places", autogenerate: { directory: "places" } },
      ],
    }),
  ],
});
