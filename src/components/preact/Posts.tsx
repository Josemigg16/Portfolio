import { useEffect, useState } from 'preact/hooks'
import { searchStore } from '../../stores/searchStore'
import { useStore } from '@nanostores/preact'

export default function Posts({ allPosts }: any) {
	const [posts, setPosts] = useState(allPosts)
	const search = useStore(searchStore)
	useEffect(() => {
		setPosts(
			allPosts.filter((post: any) => post.data.title.toLowerCase().includes(search.toLowerCase()))
		)
	}, [search])
	return posts.length === 0 ? (
		<p class='mt-40 grid place-content-center'>No posts found</p>
	) : (
		<ul class='my-8 flex flex-wrap gap-10 pl-4'>
			{posts.map((post: any) => (
				<li class='mx-auto flex h-60 max-w-[250px] flex-col justify-between sm:mx-0'>
					<picture class='grid h-full place-content-center rounded'>
						<a href={`posts/${post.slug}`}>
							<img
								style={`view-transition-name:${post.data.id};`}
								class='rounded bg-black'
								src={post.data.image.url}
								alt=''
								width='250'
							/>
						</a>
					</picture>
					<a
						class='line-clamp-3 px-2 pb-6 indent-2 font-semibold hover:underline'
						href={`posts/${post.slug}`}
					>
						{post.data.title}
					</a>
				</li>
			))}
		</ul>
	)
}
