import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dataplexor",
    short_name: "Dataplexor",
    description:
      "Data & Analytics, AI and Agentic AI — products, services and consulting.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2338ec",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
