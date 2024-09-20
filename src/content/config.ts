import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      id: z.string(),
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.string(),
      tags: z.array(z.string()),
    })
});
export const collections = {
  posts: postsCollection,
};