$(document).ready(function(){
		if($(window).width() < 992) {
			$('#first').remove();
		}
	$("#tel").mask("+7 (999) 999-99-99");

	//	скролл без якорей
	$('.toTop').on('click', function (e) {
		e.preventDefault();
		// var targetSection = $(this).attr("href");
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$('[data-fancybox="group"]').fancybox({
		idleTime  : false,
		baseClass : 'fancybox-custom-layout',
		margin    : 0,
		gutter    : 0,
		infobar   : true,
		thumbs    : {
			hideOnClose : false,
			parentEl    : '.fancybox-outer'
		},
		arrows : true,
		touch : {
			vertical : false
		},
		spinnerTpl : '<div class="fancybox-loading"></div>',
		animationEffect   : "fade",
		animationDuration : 300,
		modal : true,

		onInit : function( instance ) {
			instance.$refs.inner.prepend( '<h1 class="heading">Наш продукт в действии</h1>' );
			instance.$refs.inner.prepend( '<div class="fancybox-button fancybox-button--close" onclick="$.fancybox.close( true );"></div>' );
			instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
		}
	});

	if($(window).width() > 992) {
	var first = $('#first').waypoint({
		handler: function(direction) {
			$('.side').hide();
			$('nav').hide();
		}
	});
	}

	var prod_wp = $('#product').waypoint({
		handler: function(direction) {
			$('.side').show();
			$('nav').show();
			$('.side #logo .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #logo_text .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			});
			$('.navbar .navbar-nav a').removeAttr('style').css({'color':'#fffff'});
			$('.navbar .btn-special').removeClass('invert');
			$('.navbar .navbar-nav').removeClass('nav-invert');
			$('.navbar').removeClass('mobBack-invert').addClass('mobBack');
			$('.navbar .navbar-toggler').removeClass('invert');
			setTimeout(function(){
				   $('#holo_line').addClass('start');
			}, 1000);
			setTimeout(function(){
				   $('#holo_line').fadeOut();
				   $('.back').fadeIn().css({'position':'relative'});
			}, 3250);
			$('.animation').removeClass('d-none').addClass('fadeInRight');
			$('.sideQuote').removeClass('d-none').addClass('fadeInLeftBig');
			$('.imgs img').removeClass('d-none').addClass('flipInX');
		},
		offset: '50%'
	});

	var adw_wp = $('#advantages').waypoint({
		handler: function(direction) {
			$('.side #logo .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #logo_text .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			});
			$('.navbar .navbar-nav a').removeAttr('style').css({'color':'#fffff'});
			$('.navbar .btn-special').removeClass('invert');
			$('.navbar .navbar-nav').removeClass('nav-invert');
			$('.navbar').removeClass('mobBack-invert').addClass('mobBack');
			$('.navbar .navbar-toggler').removeClass('invert');
			setTimeout(function(){
			$('.text1').removeClass('d-none').addClass('fadeInLeft');
				$('#back_line').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
				$('#back_line').addClass('start');
			}, 1000);
			}, 500);
			setTimeout(function(){
				$('.text2').removeClass('d-none').addClass('fadeInLeft');
				$('#back_line_2').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
				$('#back_line_2').addClass('start');
				}, 1000);
			}, 1000);
			setTimeout(function(){
				$('.text3').removeClass('d-none').addClass('fadeInLeft');
				$('#back_line_3').removeClass('d-none').addClass('fadeInRightBig');
			setTimeout(function(){
				$('#back_line_3').addClass('start');
			}, 1000);
			}, 1500);
			setTimeout(function(){
				$('.text4').removeClass('d-none').addClass('fadeInUp');
			}, 2500);
		},
		offset: '50%'
	});

	var adw_wp_2 = $('#advantages2').waypoint({
		handler: function(direction) {
			$('.side #logo .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #logo_text .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			});
			$('.navbar .navbar-nav a').removeAttr('style').css({'color':'#fffff'});
			$('.navbar .btn-special').removeClass('invert');
			$('.navbar .navbar-toggler').removeClass('invert');
			$('.navbar').removeClass('mobBack-invert').addClass('mobBack');
			$('.navbar .navbar-nav').removeClass('nav-invert');
			$('.a2text1').removeClass('d-none').addClass('fadeInLeft');
			setTimeout(function(){
				$('.h11').removeClass('d-none').addClass('fadeInRightBig');
			}, 500);
			setTimeout(function(){
				$('.a2text2').removeClass('d-none').addClass('fadeInLeft');
				$('.h12').removeClass('d-none').addClass('fadeInRightBig');
			}, 1000);
			setTimeout(function(){
				$('.a2text3').removeClass('d-none').addClass('fadeInLeft');
				$('.h13').removeClass('d-none').addClass('fadeInRightBig');
			}, 2000);
			setTimeout(function(){
				$('.a2text4').removeClass('d-none').addClass('fadeInUp');
			}, 3000);
			setTimeout(function(){
				$('.anchor').removeClass('d-none').addClass('fadeInUp');
			}, 3500);
		},
		offset: '50%'
	});

	var we_re = $('#we_are').waypoint({
		handler: function(direction) {
			$('.side #logo .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #logo_text .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #uparrow .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			});
			$('.navbar .navbar-nav a').css({'color':'#1e1e1e'});
			$('.navbar .btn-special').addClass('invert');
			$('.navbar .navbar-nav').addClass('nav-invert');
			$('.navbar').removeClass('mobBack').addClass('mobBack-invert');
			$('.navbar .navbar-toggler').addClass('invert');
			setTimeout(function(){
				$('.w2text1').removeClass('d-none').addClass('fadeInLeft');
				$('#deliver').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#deliver').addClass('start');
				}, 500);
			}, 500);
			setTimeout(function(){
				$('.w2text2').removeClass('d-none').addClass('fadeInLeft');
				$('#service').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#service').addClass('start');
				}, 750);
			}, 1000);
			setTimeout(function(){
				$('.w2text3').removeClass('d-none').addClass('fadeInLeft');
				$('#setup').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#setup').addClass('start');
				}, 1000);
			}, 1500);
			setTimeout(function(){
				$('.w2text4').removeClass('d-none').addClass('fadeInLeft');
				$('#operator').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#operator').addClass('start');
				}, 1500);
			}, 2000);
			setTimeout(function(){
				$('.w2text5').removeClass('d-none').addClass('fadeInUp');
			}, 2500);
		},
		offset: '50%'
	});

	var cntct = $('#contact').waypoint({
		handler: function(direction) {
			$('.side #logo .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #logo_text .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #uparrow .st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			});
			setTimeout(function(){
				$('.c1text1').removeClass('d-none').addClass('fadeInLeft');
				$('#call').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#call').addClass('start');
				}, 250);
			}, 500);
			setTimeout(function(){
				$('.c1anchor1').removeClass('d-none').addClass('fadeInRight');
				$('.c1anchor2').removeClass('d-none').addClass('fadeInRight');
			}, 1000);
			setTimeout(function(){
				$('.c1text2').removeClass('d-none').addClass('fadeInLeft');
				$('#setup').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#setup').addClass('start');
				}, 750);
			}, 1000);
			setTimeout(function(){
				$('.c1anchor3').removeClass('d-none').addClass('fadeInLeft');
				$('#mail').removeClass('d-none').addClass('fadeInRightBig');
				setTimeout(function(){
					$('#mail').addClass('start');
				}, 750);
			}, 1500);
			setTimeout(function(){
				$('.c1text2').removeClass('d-none').addClass('fadeInUp');
			}, 2000);
		},
		offset: '50%'
	});



	var adw_wp_2_tt = $('#advantages2').waypoint({
		handler: function(direction) {
			$('.side #logo .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #logo_text .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.side #uparrow .st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			$('.navbar .navbar-nav a').removeAttr('style').css({'color':'#fffff'});
			$('.navbar .btn-special').removeClass('invert');
			$('.navbar .navbar-nav').removeClass('nav-invert');
			$('.side #uparrow').on('mouseenter', function(){
				$(this).find('.st0').css({'fill':'#1e1e1e', 'stroke':'#1e1e1e'});
			}).on('mouseleave', function(){
				$(this).find('.st0').css({'fill':'#ffffff', 'stroke':'#ffffff'});
			});

		},
		offset: 'bottom-in-view'
	});

	$('.btn-special').on('click', function(){
		$('#formModal').modal('toggle');
	});

	var form = $('#contactForm');
	$(form).submit(function (e){
		e.preventDefault();
		var formData = $(form).serialize(),
		result = $.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: formData,
			beforeSend: function () {
				$('#submit').text('Отправляется');
			},
			success: function (response, textStatus, jqXHR) {
				console.log(response);
				if (response === "success") {
					form.addClass('animated fadeOutTop');
					setTimeout(function(){
						form.hide();
						$('.success').addClass('animated fadeInDown').css({'display' : 'flex'});
					}, 800);
					setTimeout(function(){
						$('#formModal').modal('close');
					});
				} else {
					result = response;
					console.log(response);
				}
			}
		});
	});
});

