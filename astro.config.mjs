import { defineConfig } from "astro/config";
import decapCms from "astro-decap";

export default defineConfig({
  // ...,
  cmsScriptSrc: "https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js",
  integrations: [decapCms({
    cmsConfig: {
      local_backend: import.meta.env.MODE === "development",
      backend: { name: "github", repo: "astrotemp/decap" },
      media_folder: "public",
      public_folder: "/",

      collections: [
        {
          label: "Blog posts",
          name: "blog",
          folder: "src/content/blog",
          fields: [
            { name: "title", label: "Title", widget: "string" },
            { name: "description", label: "Description", widget: "text" },
            {
              name: "pubDate",
              label: "Publication date",
              widget: "datetime",
            },
            {
              name: "updatedDate",
              label: "Updated date",
              widget: "datetime",
              required: false,
            },
            {
              name: "heroImage",
              label: "Hero image",
              widget: "image",
              required: false,
            },
            { name: "body", widget: "markdown" },
          ],
        },
      ],
    },
  })],
});
