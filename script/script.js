const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  
  },

  // And if we need scrollbar

});

document.addEventListener('DOMContentLoaded', () => {
 function checkScreenWidth() {
		const fullscreenBlock = document.getElementById('fullscreen-block')
		if (window.innerWidth < 1366 || window.innerWidth > 1366) {
			fullscreenBlock.style.visibility = 'visible'
		} else {
			fullscreenBlock.style.visibility = 'hidden' 
		}
 }

 checkScreenWidth()

 window.onresize = checkScreenWidth
})