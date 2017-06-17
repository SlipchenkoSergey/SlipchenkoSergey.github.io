$(document).ready(function() {
			// loader
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
			// line-scroll
$("body, .left_side").niceScroll({
	horizrailenabled : false,
	"verge" : "500",
});
							// если не работает скролл
$(".gallery").css("min-height", $(document).height()*2);
							// bottom-menu
$(".btn_mnu").click(function() {
	$(this).toggleClass("active");
	$(".left_side").toggleClass("active");
	$(".content").toggleClass("active");
});

$(".gallery").css("min-height", $(document).height()*1.1);

	//Цели для Яндекс.Метрики и Google Analytics
$(".count_element").on("click", (function() {
	ga("send", "event", "goal", "goal");
	yaCounterXXXXXXXX.reachGoal("goal");
	return true;
}));

	//SVG Fallback
if(!Modernizr.svg) {
	$("img[src*='svg']").attr("src", function() {
	return $(this).attr("src").replace(".svg", ".png");
});
};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
$("#form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
		}, 1000);
	});
		return false;
	});
			// gallery
	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});
 		// filter
	$(".filter_label").click(function() {
		$(".filter_label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});
			// img_Loading
	$(".gallery img").lazyload({
		effect : "fadeIn",
		threshold : 6000,
	}).parent().hover(function() {
		$(".gallery a").css("opacity", ".8");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});

	$('.gallery a').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
  },
  removalDelay: 200,
  mainClass: "mfp-fade"
  // other options
		});


});