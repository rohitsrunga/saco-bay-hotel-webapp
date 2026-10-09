// Shared metadata for every Local Guide post. Used by the blog listing page and
// by BlogPost.astro for "Updated" dates and the related-guides section.

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	updated?: string;
	category: string;
	excerpt: string;
	related: string[];
}

export const posts: PostMeta[] = [
	{
		slug: 'fall-winter-saco-old-orchard-beach',
		title: "Fall & Winter in Saco and Old Orchard Beach: 2026 Guide",
		date: '2026-10-08',
		category: 'Seasonal Guide',
		excerpt: "The parks have closed for the season, but the coast hasn't. Fall foliage at Ferry Beach, the Pumpkin Harvest Festival, Saco's Parade of Lights, and what's still open after Labor Day.",
		related: ['ferry-beach-state-park', 'things-to-do-saco-maine-outdoors', 'things-to-do-old-orchard-beach'],
	},
	{
		slug: 'old-orchard-beach-summer-2026',
		title: "Old Orchard Beach Summer 2026: Events, Festivals & What's New",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Seasonal Guide',
		excerpt: "How summer 2026 played out at Old Orchard Beach, and what to know for next summer: Thursday fireworks, Rock the Park, Palace Playland's Speedy Coaster, and the events worth planning around.",
		related: ['july-4th-old-orchard-beach', 'palace-playland-guide', 'fall-winter-saco-old-orchard-beach'],
	},
	{
		slug: 'july-4th-old-orchard-beach',
		title: "July 4th at Old Orchard Beach: What to Expect",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Seasonal Guide',
		excerpt: "Fireworks over the Atlantic, a packed boardwalk, and the best lobster roll you will have all summer. Here is how to do July 4th at Old Orchard Beach, with notes for 2027.",
		related: ['old-orchard-beach-summer-2026', 'palace-playland-guide', 'boston-to-old-orchard-beach'],
	},
	{
		slug: 'things-to-do-old-orchard-beach',
		title: "The Ultimate Guide to Old Orchard Beach, Maine",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Destination Guide',
		excerpt: "Seven miles of beach, a 500-foot wooden pier, and the last traditional beachfront amusement park in New England. Everything to know before your first or tenth visit.",
		related: ['palace-playland-guide', 'ferry-beach-state-park', 'boston-to-old-orchard-beach'],
	},
	{
		slug: 'palace-playland-guide',
		title: "Palace Playland: Everything You Need to Know",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Attraction Guide',
		excerpt: "The only traditional oceanfront amusement park left on the New England coast. What to ride, what to skip, and how to make the most of a visit.",
		related: ['funtown-splashtown-guide', 'things-to-do-old-orchard-beach', 'july-4th-old-orchard-beach'],
	},
	{
		slug: 'funtown-splashtown-guide',
		title: "Funtown Splashtown USA: Tips, Best Rides & How to Plan Your Day",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Attraction Guide',
		excerpt: "Maine's largest amusement and water park is less than 2 miles from the hotel. A full guide to Excalibur, the water slides, the new Lazy Lobster Lagoon, and how to plan a full day.",
		related: ['palace-playland-guide', 'things-to-do-old-orchard-beach', 'ferry-beach-state-park'],
	},
	{
		slug: 'ferry-beach-state-park',
		title: "Ferry Beach State Park: Maine's Quiet Beach Near Saco",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Nature Guide',
		excerpt: "Two miles from the hotel, Ferry Beach is one of the most underrated state parks in Maine. Wide sand, rare tupelo trees, and a lot fewer people than Old Orchard.",
		related: ['things-to-do-saco-maine-outdoors', 'fall-winter-saco-old-orchard-beach', 'things-to-do-old-orchard-beach'],
	},
	{
		slug: 'boston-to-old-orchard-beach',
		title: "Boston to Old Orchard Beach by Car: The Complete Guide",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Travel Guide',
		excerpt: "About 95 miles up I-95. What to know about traffic, tolls, the Downeaster train, road trip stops, and why Saco makes a better base than staying right in Old Orchard Beach.",
		related: ['things-to-do-old-orchard-beach', 'july-4th-old-orchard-beach', 'funtown-splashtown-guide'],
	},
	{
		slug: 'things-to-do-saco-maine-outdoors',
		title: "Outdoor Things to Do Near Saco, Maine",
		date: '2026-07-01',
		updated: '2026-10-08',
		category: 'Activity Guide',
		excerpt: "Beyond the boardwalk: salt marshes, river paddles, birding spots, and coastal trails within 15 miles of the hotel.",
		related: ['ferry-beach-state-park', 'fall-winter-saco-old-orchard-beach', 'things-to-do-old-orchard-beach'],
	},
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
