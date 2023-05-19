import type { PageLoad } from './$types';
import { posts } from '$lib/utility/posts';


export const load = (async ({ params }) => {
    // load the markdown file based on slug
    const component = await import(`../../../lib/blogs/${params.blogId}.md`);
    const post = posts.filter((post) => post.slug === params.blogId)[0];

    return {
        blog: params.blogId,
        post,
        component: component.default,
        layout: {
        fullWidth: true,
        },
    };
}) satisfies PageLoad;