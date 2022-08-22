const slides1 = document.querySelectorAll ('.slide1')
for (const slide1 of slides1) {
  slide1.addEventListener ('click', () => {
    clearActive1Classes ()
    slide1.classList.add ('active1')
  })
}
function clearActive1Classes () {
  slides1.forEach((slide1) => {slide1.classList.remove ('active1')})
}
const slides2 = document.querySelectorAll ('.slide2')
for (const slide2 of slides2) {
  slide2.addEventListener ('click', () => {
    clearActive2Classes ()
    slide2.classList.add ('active2')
  })
}
function clearActive2Classes () {
  slides2.forEach((slide2) => {slide2.classList.remove ('active2')})
}
const slides3 = document.querySelectorAll ('.slide3')
for (const slide3 of slides3) {
  slide3.addEventListener ('click', () => {
    clearActive3Classes ()
    slide3.classList.add ('active3')
  })
}
function clearActive3Classes () {
  slides3.forEach((slide3) => {slide3.classList.remove ('active3')})
}

const slides4 = document.querySelectorAll ('.slide4')
for (const slide4 of slides4) {
  slide4.addEventListener ('click', () => {
    clearActive4Classes ()
    slide4.classList.add ('active4')
  })
}
function clearActive4Classes () {
  slides4.forEach((slide4) => {slide4.classList.remove ('active4')})
}