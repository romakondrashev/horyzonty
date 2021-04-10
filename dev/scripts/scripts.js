jQuery(function() {
	$('#menu__toggle').on('change',function(){
		if(this.checked) {
	        $('header.desktop').css("display", "flex").hide().fadeIn();
	        $('header.mobile').addClass('active');
	    } else {
	    	$('header.desktop').fadeOut();
	    	$('header.mobile').removeClass('active');
	    }
	})
	const swiper = new Swiper('.swiper-container', {
	  
	  // autoHeight: true,
	  slidesPerView: 1,
	  spaceBetween: 30,

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

	  breakpoints: {
	    // when window width is >= 320px
	    450: {
	      slidesPerView: 2,
	      spaceBetween: 20
	    },
	  }



	});
});
