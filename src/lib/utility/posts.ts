
// src/lib/server/posts.ts

// import { parse } from 'path';

type GlobEntry = {
    metadata: Post;
    default: unknown;
};

export interface Post {
    title: string;
    description: string;
    date: Date;
    author: string;
    image: string;
}

// Get all posts and add metadata
export const posts = Object.entries(
    import.meta.glob<GlobEntry>('/src/lib/blogs/*.md', { eager: true })
)
    .map(([filepath, globEntry]) => {
        return {
            ...globEntry.metadata,
            // generate the slug from the file path

            slug: filepath.slice(0, -3).split('/').pop() || '',
        };
    })
    // sort by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // add references to the next/previous post
    .map((post, index, allPosts) => ({
        ...post,
        next: allPosts[index - 1] || 0,
        previous: allPosts[index + 1] || 0,
    }));