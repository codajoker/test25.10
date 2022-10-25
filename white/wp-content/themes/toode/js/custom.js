if(jQuery('.ngg-galleryoverview').length > 0) magnific_popup_init(jQuery('.ngg-galleryoverview'));

if(jQuery('.product-galleryoverview').length > 0){
	jQuery('.product-galleryoverview').each(function(i, obj) {
		magnific_popup_init(jQuery(obj));
	});
}else if(jQuery("img").parent().attr("rel").length > 0){
	jQuery("img").parent().each(function(i, obj) {
		magnific_popup_init(jQuery(obj).parent());
	});
}

function magnific_popup_init(item) {
	item.magnificPopup({
		delegate: 'a[rel^="toodePopUp"]',
		type: 'image',
		removalDelay: 500,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			beforeOpen: function() { 
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			}
		},
		gallery: {enabled:true}
	});
}

jQuery('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1200:{
            items:4,
            nav:false,
            loop:false
        }
    }
})

jQuery( ".cherry-mega-menu-mobile-trigger", ".cherry-mega-menu-mobile-close" ).click(function() {
  //alert( "Handler for .click() called."+ jQuery('#menu-primary-items').css('display') );
  	console.log(jQuery('#menu-primary-items').css('display'));
  	if(jQuery('#menu-primary-items').css('display') == 'none'){ 
	   jQuery('#menu-primary-items').show('slow'); 
	}else if(jQuery('#menu-primary-items').css('display') == 'block'){ 
	   jQuery('#menu-primary-items').hide('slow'); 
	}
  
});