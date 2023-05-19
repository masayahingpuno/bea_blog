import type { LayoutLoad } from './$types';
import { posts } from '$lib/utility/posts';


export const load = (async () => {
    return {
        posts: posts,
    };
}) satisfies LayoutLoad;