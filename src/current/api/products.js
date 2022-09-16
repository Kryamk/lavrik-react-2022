const BASEURL = 'http://faceprog.ru/reactcourseapi/products/';

export async function load() {
	let response = await fetch(`${BASEURL}all.php`);
	return await response.json();
}
