import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "DM Witchlight Adventure",
      social: { github: "https://github.com/Spronghi/dnd-witchlight-campaign" },
      logo: { src: "./src/assets/logo.png" },
      sidebar: [
        { label: "Home", link: "/" },
        { label: "Sessions", autogenerate: { directory: "sessions" } },
        { label: "Characters", autogenerate: { directory: "characters" } },
        { label: "NPCs", autogenerate: { directory: "npc" } },
        { label: "Places", autogenerate: { directory: "places" } },
        { label: "Procedures", autogenerate: { directory: "procedures" } },
        { label: "Resources", link: "/resources" },
      ],
    }),
  ],
});
