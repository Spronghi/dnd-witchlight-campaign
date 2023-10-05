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
  if (process.env.MODE === "players" && s.label === "Players") {
    return false;
  }

  return true;
});


const title = process.env.MODE === "players" ? "Witchlight Adventure" : "DM Witchlight Adventure"
const social = process.env.MODE === "players" ? {} : { github: "https://github.com/Spronghi/dnd-witchlight-campaign" }

export default defineConfig({
  integrations: [
    starlight({
      title,
      social,
      logo: { src: "./src/assets/logo.png" },
      sidebar,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: "og:image",
            content: 'https://main--starlit-squirrel-f8016c.netlify.app/preview.jpg'
          },
        },
      ],
    }),
  ],
});
