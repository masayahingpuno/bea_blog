import type { PageServerLoad } from './$types';
import { posts } from '$lib/utility/posts';


export const load = (async () => {
    return {
        posts,
    };
}) satisfies PageServerLoad;