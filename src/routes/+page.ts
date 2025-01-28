import type {PageLoad} from './$types';

export const load: PageLoad = async ({fetch}) => {
	const response = await fetch("https://jsonplaceholder.typicode.com/photos")
	const data = await response.json()
	return {
		photos:data
	}
}