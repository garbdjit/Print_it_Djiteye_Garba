const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const dotsDiv = document.querySelector('.dots')

for(let i = 0 ; i < slides.length ; i++) {
	const dot = document.createElement('span')
	dot.classList.add('dot')
	dotsDiv.append(dot)
}
const firstDot = document.querySelector('.dot')
firstDot.classList.add('dot_selected')

const img = document.querySelector('.banner_img')
const imageDir = "./assets/images/slideshow/"

const minIndex = 0
const maxIndex = slides.length - 1
let currentIndex = minIndex

const arrow_right = document.querySelector('.arrow_right')
const arrow_left = document.querySelector('.arrow_left')

const text = document.getElementById('banner__text')

const dots = document.getElementsByClassName('dot')

img.src = imageDir + slides[currentIndex].image
text.innerHTML = slides[currentIndex].tagLine

function next() {
	dots[currentIndex].classList.remove('dot_selected')
	if(currentIndex === maxIndex){
		currentIndex = minIndex
	}else {
		currentIndex++
	}
	dots[currentIndex].classList.add('dot_selected')
	img.src = imageDir + slides[currentIndex].image
	text.innerHTML = slides[currentIndex].tagLine
}

arrow_right.addEventListener('click',next);

function previous() {
	dots[currentIndex].classList.remove('dot_selected')
	if(currentIndex === minIndex){
		currentIndex = maxIndex
	}else {
		currentIndex--
	}
	dots[currentIndex].classList.add('dot_selected')
	img.src = imageDir + slides[currentIndex].image
	text.innerHTML = slides[currentIndex].tagLine	
}

arrow_left.addEventListener('click', previous)