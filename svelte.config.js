import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
