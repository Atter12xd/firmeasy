import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://firmeasy.legal",  
  integrations: [react(), partytown()]
});