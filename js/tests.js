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
});