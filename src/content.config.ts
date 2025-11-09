import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        summary: z.string(),
        hero: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const passions = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/passions" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        summary: z.string(),
    }),
});

export const collections = { projects, passions };