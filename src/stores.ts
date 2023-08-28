import { writable } from 'svelte/store'
import type { Feedback } from './types/feedback'

// Initial feedback data
const initialFeedback: Feedback[] = [
	{
		id: 1,
		rating: 10,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: 2,
		rating: 9,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
	{
		id: 3,
		rating: 8,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
	},
]

// Create a writable store with the initial feedback data
export const FeedbackStore = writable<Feedback[]>(initialFeedback)
