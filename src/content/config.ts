import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection<any>({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    resume: z.string()
  }),
});

export const collections = {
  'blog': blogCollection,
};