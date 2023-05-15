import type { PageServerLoad } from './$types';
import { posts } from '$lib/utility/posts';


export const load = (async ({ params }) => {
    return {
        posts: posts.filter((post) => post.slug === params.blogId)[0]
    };
}) satisfies PageServerLoad;