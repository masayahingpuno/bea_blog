export const navigation = [
    {
        id: 1,
        name: 'Home',
        href: '/'
    },
    {
        id: 2,
        name: 'About',
        href: '/about'
    },
    {
        id: 3,
        name: 'Contact',
        href: '/contact'
    },
    {
        id: 4,
        name: 'Blog',
        href: '/blog'
    },
    {
        id: 5,
        name: 'Support',
        href: '/support'
    }
];

import { faker } from '@faker-js/faker';


export const createBlogData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        author: faker.person.firstName() + ' ' + faker.person.lastName(),
        date: faker.date.past(),
        title: faker.lorem.sentence(),
        preview: faker.lorem.paragraph().slice(0, 100) + '...',
        content: faker.lorem.paragraphs(),
        image: faker.image.urlPicsumPhotos(),
    }));
};
