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
	$(".prev-button, .next-button").click(function (e) {
		e.preventDefault();
		if (this.classList.hasClass("prev-button")) {
			// Previous
		} else {
			// Next
		}
	});
});