var current_page_helper_obj = require('../lib/current_page_helper.js');
var current_page_helper = current_page_helper_obj.directAccess()["block_helpers"];

describe("behaviour of current helper", function() {

	it("add the current class for a section path", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/about/index", ".html", {}, spyCallback);

		expect(current_page_helper.current("about")).toEqual("current");
	});

	it("add the current class for a sub section path", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/about/team/index", ".html", {}, spyCallback);

		expect(current_page_helper.current("/about/team")).toEqual("current");
	});

	it("add the current class for a direct path", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/section/sub/path", ".html", {}, spyCallback);

		expect(current_page_helper.current("/section/sub/path")).toEqual("current");
	});

	it("add the current class for a direct path with extension", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/section/sub/path", ".html", {}, spyCallback);

		expect(current_page_helper.current("/section/sub/path.html")).toEqual("current");
	});

	it("don't add the current class if the paths doesn't match", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/section/sub/path", ".html", {}, spyCallback);

		expect(current_page_helper.current("about")).toEqual("");
	});

	it("don't add the current class if no path given", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/section/sub/path", ".html", {}, spyCallback);

		expect(current_page_helper.current("")).toEqual("");
	});

	it("don't match the case", function() {
		var spyCallback = jasmine.createSpy();
		current_page_helper_obj.get("/section/sub/path", ".html", {}, spyCallback);

		expect(current_page_helper.current("/Section/Sub/Path")).toEqual("current");
	});

});
