// Change Background Image
let landingPage = document.querySelector(".landing-page");
let imgArray = ["carousel-1.jpg", "carousel-2.jpg"];

setInterval(() => {
	let num = Math.floor(Math.random() * imgArray.length);
	landingPage.style.backgroundImage = 'url("img/' + imgArray[num] + '")';
}, 3000);

// Active Nav
let link = document.querySelectorAll(".links li a ");
link.forEach(li =>{
	li.addEventListener("click" , (e) =>{
		active(e);
	});
	console.log(link);
})


function active(ac) {
	ac.target.parentElement.querySelectorAll(".active").forEach(element => {
		element.classList.remove("active");
	});
	ac.target.classList.add("active");
};


// Menu
let btnMenu = document.querySelector(".menu");
let links = document.querySelector(".links");
btnMenu.onclick = function (e) {
	e.stopPropagation();

	links.classList.toggle("open");
};

document.addEventListener("click", (e) => {
	if (e.target !== btnMenu && e.target !== links) {
		if (links.classList.contains("open")) {
			links.classList.toggle("open");
		}
	}
});
links.onclick = function (e) {
	e.stopPropagation();
};

// BTN-Top
let btnTop = document.querySelector(".btn-top");

window.onscroll = function () {
	if (this.scrollY >= 400) {
		btnTop.classList.add("active");
	} else {
		btnTop.classList.remove("active");
	}
};
btnTop.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
// Testimonial Slide

let bubble = document.querySelectorAll(".testimonial .bubble span");
let slide = document.querySelector(".testimonial .slid-row");
bubble[0].onclick = function () {
	slide.style.transform = "translateX(0px)";
	for (i = 0; i < 4; i++) {
		bubble[i].classList.remove("active");
	}
	this.classList.add("active");
};
bubble[1].onclick = function () {
	slide.style.transform = "translateX(-390px)";
	for (i = 0; i < 4; i++) {
		bubble[i].classList.remove("active");
	}
	this.classList.add("active");
};
bubble[2].onclick = function () {
	slide.style.transform = "translateX(-780px)";
	for (i = 0; i < 4; i++) {
		bubble[i].classList.remove("active");
	}
	this.classList.add("active");
};
bubble[3].onclick = function () {
	slide.style.transform = "translateX(-1170px)";
	for (i = 0; i < 4; i++) {
		bubble[i].classList.remove("active");
	}
	this.classList.add("active");
};