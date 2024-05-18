window.addEventListener('scroll', () => {
	document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	});

window.onscroll = fixHeadTop; 

var burger = document.getElementById("burger");
	burger.addEventListener("click", showMenu);

function showMenu() {

	  document.getElementById("nav").classList.toggle("nav-show");
	  document.querySelector("body").classList.toggle("is-lock");

	  burger.classList.toggle("is-active");

	  if(document.getElementById("nav").classList.contains('nav-show')){
	  		const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	  		const body = document.body;
	  		// body.style.position = 'fixed';
	  		body.style.top = `-${scrollY}`;
		}
		else {
			const body = document.body;
	  		const scrollY = body.style.top;
	  		body.style.position = '';
	  		body.style.top = '';
	  		window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
}

function fixHeadTop () {

	var headtop = document.querySelector('.head-top');
	var nav = document.querySelector('.nav');
	if(headtop){
		if(window.pageYOffset > 700) {
			headtop.classList.add('head-top_fixed');
			nav.classList.add('pt-130');
		} else {
			headtop.classList.remove('head-top_fixed');
			nav.classList.remove('pt-130');
		}
	}
}