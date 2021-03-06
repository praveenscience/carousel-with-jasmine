$(function () {
	describe("Libraries", function () {
		it("should have loaded jQuery.", function () {
			expect(typeof $).toBe("function");
			expect(typeof $.fn).toBe("object");
			expect($.fn.jquery).toBe("2.2.4");
		});
		it("should have loaded Jasmine.", function () {
			expect(typeof describe).toBe("function");
			expect(typeof it).toBe("function");
			expect(typeof expect).toBe("function");
		});
	});
	describe("Carousel", function () {
		it("should have an unordered list with class carousel.", function () {
			expect($("ul.carousel").length).toBe(1);
		});
		it("should have a previous button and next button.", function () {
			expect($(".prev-button").length).toBe(2);
			expect($(".next-button").length).toBe(2);
		});
		it("should have previous next button event handlers.", function () {
			expect(typeof $(".prev-button").click).toBe("function");
			expect(typeof $(".next-button").click).toBe("function");
		});
	});
	describe("Fetching Images from API", function () {
		// This is an async request to fetch all the images from API.
		beforeEach(function (done) {
			loadImages(function () {
				done();
			});
		});
		it("should have at least some images.", function () {
			expect($("ul.carousel li").length).toBeGreaterThan(0);
		});
		it("should have metadata for images.", function () {
			expect($("ul.carousel li").length).toBe($("ul.carousel li .meta").length);
		});
	});
});