import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { existsSync, readdirSync } from "node:fs";

const BLOG_BASE = "./src/content/blog";
const inner = glob({ pattern: "**/*.md", base: BLOG_BASE });

const blog = defineCollection({
  loader: {
    name: inner.name,
    load: async (context) => {
      const hasFiles =
        existsSync(BLOG_BASE) &&
        readdirSync(BLOG_BASE, { recursive: true }).some((f) =>
          String(f).endsWith(".md"),
        );
      if (!hasFiles) {
        context.store.clear();
        context.store.set({ id: "__init__", data: {} });
        context.store.delete("__init__");
        return;
      }
      await inner.load(context);
    },
  },
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
