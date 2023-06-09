import type { PageLoad } from './$types';
// import { posts } from '$lib/utility/posts';


export const load = (async ({ params }) => {
    // load the markdown file based on slug
    const component = await import(`../../../lib/blogs/${params.blogId}.md`);

    return {
        blog: params.blogId,
        component: component.default,
        layout: {
        fullWidth: true,
        },
    };
}) satisfies PageLoad;