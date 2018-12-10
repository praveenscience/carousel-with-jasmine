function loadImages(cb) {
	$.getJSON("https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo", function (res) {
		$.each(res.hits, function (index, image) {
			$("ul.carousel").append(function () {
				$li = $("<li />");
				$li.html('<img src="' + image.webformatURL + '" alt="' + image.type + '" />');
				return $li;
			});
		});
		if (typeof cb == "function")
			cb();
	});
}

$(function () {
	$("ul.carousel").first().css("left", 0);
	$(".prev-button, .next-button").click(function (e) {
		e.preventDefault();
		var $firstLi = $("ul.carousel").first();
		// Add 20 with the width, as outerWidth or any width doesn't calc margins.
		var firstLiWd = $firstLi.find("li").first().outerWidth() + 20;
		$("ul.carousel li").width($firstLi.find("li").first().outerWidth());
		// First slide?
		var isFirstSlide = $firstLi.position().left == 0;
		if ($(this).hasClass("prev-button")) {
			// Don't go previous if first slide.
			if (isFirstSlide)
				return false;
			$firstLi.css("left", $firstLi.position().left + firstLiWd);
		} else {
			// Next
			$firstLi.css("left", $firstLi.position().left - firstLiWd);
		}
	});
});