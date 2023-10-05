import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const sidebar = [
  { label: "Home", link: "/" },
  { label: "Adventure Setup", link: "/setup" },
  { label: "Sessions", autogenerate: { directory: "sessions" } },
  { label: "Characters", autogenerate: { directory: "characters" } },
  { label: "NPCs", autogenerate: { directory: "npc" } },
  { label: "Places", autogenerate: { directory: "places" } },
  { label: "Cities", collapsed: true, autogenerate: { directory: "cities" } },
  { label: "Procedures", collapsed: true, autogenerate: { directory: "procedures" } },
  { label: "Resources", link: "/resources" },
  { label: "Players", collapsed: true, autogenerate: { directory: "players" } },
].filter((s) => {
  if (process.env.MODE === "players" && s.label === "For Players") {
    return false;
  }

  return true;
});

export default defineConfig({
  integrations: [
    starlight({
      title: "Witchlight Adventure",
      social: { github: "https://github.com/Spronghi/dnd-witchlight-campaign" },
      logo: { src: "./src/assets/logo.png" },
      sidebar,
    }),
  ],
});
