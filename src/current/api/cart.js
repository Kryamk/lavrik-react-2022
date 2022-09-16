const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export async function load(curToken) {
	let response = await fetch(`${BASEURL}load.php?token=${curToken}`);
	return await response.json();
}

export async function add(curToken, id) {
	let response = await fetch(`${BASEURL}add.php?token=${curToken}&id=${id}`);
	return await response.json();
}

export async function remove(curToken, id) {
	let response = await fetch(`${BASEURL}remove.php?token=${curToken}&id=${id}`);
	return await response.json();
}

export async function change(curToken, id, cnt) {
	let response = await fetch(`${BASEURL}change.php?token=${curToken}&id=${id}&cnt=${cnt}`);
	return await response.json();
}

export async function clean(curToken) {
	let response = await fetch(`${BASEURL}clean.php?token=${curToken}`);
	return await response.json();
}


/* export async function add(token, id) {
	let body = new FormData();
	body.append('token', token);
	body.append('id', id);
	let response = await fetch(`${BASEURL}`, {
		method: 'POST',
		body: body
	});
	return await response.json();
} */
