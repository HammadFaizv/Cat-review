import { writable } from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Good cat, I enjoyed this cat.',
    },
    {
        id: 2,
        rating: 9,
        text: 'Elegent posture, aesthetically pleasing.',
    },
    {
        id: 3,
        rating: 7,
        text: 'The paws are good but the chonkness is a bit missing.',
    },
]);