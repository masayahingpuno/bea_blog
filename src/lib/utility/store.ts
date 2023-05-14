import { writable } from 'svelte/store';
import { navigation } from './general';


export const currentNavigation = writable(navigation[0].href);