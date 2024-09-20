import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const posts = getCollection('posts')
	return rss({
		title: 'Josemigg Web',
		description: 'This my personal portfolio and blog',
		site: context.site,
		items: await posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`
		})),

		customData: `<language>en-us</language>`
	})
}
