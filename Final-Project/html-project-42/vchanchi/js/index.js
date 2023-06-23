const components = [
	'navbar',
	'aboutme',
	'skill',
	'contact',
];
const path = './components';
for (const name of components) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			const doc = document.querySelector(name);
			if (doc) {
				doc.innerHTML = data;
			}
		}); 
}

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}