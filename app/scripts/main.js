'use strict';

$('.carousel .slick-carousel').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1
});
$('.newscarousel .slick-carousel').slick({
	autoplay: false,
	autoplaySpeed: 5000,
	slidesToShow: 5,
	slidesToScroll: 5,
	infinite: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				vertical: true
			}
    }
   ]
});
$('.custom-scroll').mCustomScrollbar();
$(window).resize(function () {
	if ($('.contacto-info').length) {
		var contactImg = $('.contact-info-img');
		var contactCont = $('.contact-info-cont');
		if ($(window).width() < 768) {
			contactImg.eq(0).addClass('active');
			contactCont.addClass('hidden');
			contactCont.eq(0).removeClass('hidden');
			contactImg.click(function () {
				contactImg.removeClass('active');
				contactCont.addClass('hidden');
				$(this).addClass('active');
				var id = $(this).data('id');
				$('.contact-info-cont[data-id="' + id + '"]').removeClass('hidden');
			});
		} else {
			contactImg.unbind('click');
			contactImg.removeClass('active');
			contactCont.removeClass('hidden');
		}
	}
});
if ($(window).width() >= 990) {
	$('.dropdown-toggle').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		console.log($(this).attr('href'));
		window.location.href = $(this).attr('href');

	});
}
