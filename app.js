(function eyeAnimation() {
	let currX = 0;
	let currY = 0;

	window.addEventListener('mousemove', (e) => {
		let x = e.clientX * 100 / window.innerWidth / 7;
		let y = e.clientY * 100 / window.innerHeight / 7;
		const right = document.querySelector('#right-eyeball');
		const left = document.querySelector('#left-eyeball');		
		right.style.transform = `translate(${x}px,${y}px)`;
		left.style.transform = `translate(${x}px, ${y}px)`;		
	});
})();

(function mouthAnimation() {
	document.querySelector('svg').addEventListener('mouseover', () => {
		const open = document.querySelector('#mouth-open');
		const close = document.querySelector('#mouth-close');

		open.style.display = 'none';
		close.style.display = 'block';
	});

	document.querySelector('svg').addEventListener('mouseout', () => {
		const open = document.querySelector('#mouth-open');
		const close = document.querySelector('#mouth-close');
		close.style.display = 'none';
		open.style.display = 'block';
	});
})();
