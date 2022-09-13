console.log('testing');

// set global variables 
let lighting = false;
let litMatch = false;
let matchOverCandle = false;
let fire = 0;
let backgroundLight = 0;

// get images from HTML
const unlitMatch = document.getElementById('unlitMatch');
const candle1 = document.getElementById('unlit-candle1');
const candle2 = document.getElementById('unlit-candle2');
const candle3 = document.getElementById('unlit-candle3');
const matchBox = document.getElementById('match-box-img');

// https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/
const followMouse = (e) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	// match.png is ~135px in width, move match 135px to the left so tip of match is next to cursor 
  	unlitMatch.style.transform = `translate3d(${mouseX - 135}px, ${mouseY}px, 0)`;
};

// light the match 
const lightingMatch = (value) => {
	litMatch = true;

	if (litMatch) {
		unlitMatch.src = "img/match-lit.png";
		unlitMatch.alt = 'lit match'
	}
};

// light candle1 if lit match is over it long enough
const matchOverCandle1 = (value) => {
	matchOverCandle = value;

	if (matchOverCandle && litMatch) {
		fire++;
		if (fire > 1){
			candle1.src = 'img/candle1-lit.png';
			candle1.alt = 'lit tall candle';
			fire = 0;
			backgroundLight++;
		}
		// change css background color if candle is lit
		if (backgroundLight == 1){
			document.body.style.backgroundColor = '#DAAABF';
			document.html.style.backgroundColor = '#DAAABF';
		}
		if (backgroundLight == 2){
			document.body.style.backgroundColor = 'white';
			document.html.style.backgroundColor = 'white';
		}
		if (backgroundColor == 3){
			backgroundColor = 0;
		}

		matchOverCandle = false;
	}
}

// light candle2 if lit match is over it long enough
const matchOverCandle2 = (value) => {
	matchOverCandle = value;

	if (matchOverCandle && litMatch) {
		fire++;
		if (fire > 1){
			candle2.src = 'img/candle2-lit.png';
			candle2.alt = 'lit tall candle';
			fire = 0;
			backgroundLight++;
		}
		if (backgroundLight == 1){
			document.body.style.backgroundColor = '#DAAABF';
			document.html.style.backgroundColor = '#DAAABF';
		}
		if (backgroundLight == 2){
			document.body.style.backgroundColor = 'white';
			document.html.style.backgroundColor = 'white';
		}
		if (backgroundColor == 3){
			backgroundColor = 0;
		}

		matchOverCandle = false;
	}
}

// light candle3 if lit match is over it long enough
const matchOverCandle3 = (value) => {
	matchOverCandle = value;

	if (matchOverCandle && litMatch) {
		fire++;
		if (fire > 1){
			candle3.src = 'img/candle3-lit.png';
			candle3.alt = 'lit tall candle';
			fire = 0;
			backgroundLight++;
		}
		if (backgroundLight == 1){
			document.body.style.backgroundColor = '#DAAABF';
			document.html.style.backgroundColor = '#DAAABF';
		}
		if (backgroundLight == 2){
			document.body.style.backgroundColor = 'white';
			document.html.style.backgroundColor = 'white';
		}
		if (backgroundColor == 3){
			backgroundColor = 0;
		}

		matchOverCandle = false;
	}
}

window.addEventListener('mousemove', followMouse);

// if click on match box run lightinMatch function
matchBox.addEventListener('mousedown', () => {
	lightingMatch(true);
});

// if double click and the match is lit, defuse the match 
window.addEventListener('dblclick', () => {
	if (litMatch){
		unlitMatch.src = "img/match.png";
		unlitMatch.alt = 'unlit match'
		litMatch = false;
	}
});

// if mouse is over first candle, run matchOverCandle1
candle1.addEventListener('mouseenter', () => {
	matchOverCandle1(true);
});

candle1.addEventListener('mouseleave', () => {
	matchOverCandle1(false);
});

// if mouse is over first candle, run matchOverCandle2
candle2.addEventListener('mouseenter', () => {
	matchOverCandle2(true);
});

candle2.addEventListener('mouseleave', () => {
	matchOverCandle2(false);
});

// if mouse is over first candle, run matchOverCandle3
candle3.addEventListener('mouseenter', () => {
	matchOverCandle3(true);
});

candle3.addEventListener('mouseleave', () => {
	matchOverCandle3(false);
});








