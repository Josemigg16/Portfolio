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
		<p class='grid place-content-center mt-40'>No posts found</p>
	) : (
		<ul class='my-8 flex flex-wrap gap-10 pl-4'>
			{posts.map((post: any) => (
				<li class='mx-auto flex h-60 max-w-[250px] flex-col justify-between sm:mx-0 shadow'>
					<picture class='grid h-full place-content-center'>
						<a href={`posts/${post.slug}`}>
							<img
							class="bg-black"
							 src={post.data.image.url} alt='' width='250' />
						</a>
					</picture>
					<a class='line-clamp-3 pb-6 hover:underline' href={`posts/${post.slug}`}>
						{post.data.title}
					</a>
				</li>
			))}
		</ul>
	)
}
