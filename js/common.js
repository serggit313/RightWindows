$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})

	
	// Выпадающий список у десктопного меню
	let li_has_children_bottomline_listcities = document.querySelector('.li_has_children_bottomline_listcities');
	let header_bottomline_listcities_submenu = document.querySelector('.header_bottomline_listcities_submenu');
	
	if (li_has_children_bottomline_listcities) {
		li_has_children_bottomline_listcities.addEventListener('click', function(event) {
		header_bottomline_listcities_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	header_bottomline_listcities_submenu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});


	// Выпадающий список у мобильного меню
	let li_has_children_list_cities = document.querySelector('.li_has_children_list_cities');
	let list_cities_submenu = document.querySelector('.list_cities_submenu');
	
	if (li_has_children_list_cities) {
		li_has_children_list_cities.addEventListener('click', function(event) {
			list_cities_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	list_cities_submenu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});
	

	// Меню бургер
	let menu_mob = document.querySelector('.header_burgermenu')
	let header_menu_open = document.querySelector('.open_header_burger_menu')
	let header_menu_close = document.querySelector('.close_header_burger_menu')


	header_menu_open.addEventListener('click', function(){
		header_menu_close.classList.toggle('dn')
		header_menu_open.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	});

	header_menu_close.addEventListener('click', function(){
		header_menu_open.classList.toggle('dn')
		header_menu_close.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
		sub_menu_mobile.classList.toggle('dn')
	});


	// Слайдер блок 1
	$('.block_1_slider').slick({
		centerMode: true,
		centerPadding: '500px',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_btn_next'),
		dots:true,
	});


	// Слайдер блок 1 на 2340
	$('.block_1_slider_2340').slick({
		centerMode: true,
		centerPadding: '300px',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_2340_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_2340_btn_next'),
		dots:true,
	});

	// Слайдер блок 1 на 1970
	$('.block_1_slider_1970').slick({
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_1970_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_1970_btn_next'),
		dots:true,
	});


	// Слайдер блок 1 на 1765
	$('.block_1_slider_1765').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_1765_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_1765_btn_next'),
		dots:true,
	});


	// Слайдер блок 1 на 1445
	$('.block_1_slider_1445').slick({
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_1445_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_1445_btn_next'),
		dots:true,
	});

	// $(window).resize(function() {
	// 	var w = $('header .container').width();
	// 	$('.block_1 .slick-current .block_1_slider_item').css('width', w);
	// });


	// Слайдер блок 1 для планшета
	$('.block_1_slider_tablet').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_tablet_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_tablet_btn_next'),
		dots:true,
	});


	// Слайдер блок 1 для мобильника
	$('.block_1_slider_mobile').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_1_slider_mobile_btn_prev'),
	    nextArrow: document.querySelector('.block_1_slider_mobile_btn_next'),
		dots:true,
	});


	// Слайдер блок 4 
	$('.block_4_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:true,
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 860,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  dots:true,
				}
			  }
		  ]
	});


	// Слайдер блок 5
	$('.block_5_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots:true,
		responsive: [
			{
				breakpoint: 906,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  dots:true,
				}
			}
		]
	});


	// Слайдер блок 7
	$('.block_7_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_7_slider_mobile_btn_prev'),
	    nextArrow: document.querySelector('.block_7_slider_mobile_btn_next'),
		dots: true,
		responsive: [
			{
				breakpoint: 1003,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  dots:true,
				}
			},
			{
				breakpoint: 673,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  dots:true,
				}
			},
		]
	});
});