/*
 * punch-current-page-helper
 * https://github.com/lakshanperera/punch-current-page-helper
 *
 * Copyright (c) 2012 Lakshan Perera
 * Licensed under the MIT license.
 */

var _ = require("underscore");
var helper_utils = require("punch").Utils.Helper;

var current_page = "";

var this_config = {
	classname: "current"
};

var block_helpers = {

	current: function() {
		return helper_utils.checkArgs( arguments, function(text) {
			if(!text) {
				return "";
			}

			// add the trailing slash to the start
			if (text[0] !== "/") {
				text = "/" + text;
			}

			// remove the extension from the path
			if (text.indexOf(".") > -1) {
				text = text.split(".")[0];
			}

			if (text.toLowerCase() === current_page) {
				return this_config.classname;
			} else {
				return "";
			}
		});
	}

};

module.exports = {

	setup: function(config) {
			var current_page_config = config.current_page;
			this_config = _.extend(this_config, current_page_config);
	},

	directAccess: function() {
		return { "block_helpers": block_helpers, "options": {} };
	},

	get: function(basepath, file_extension, options, callback) {
		var self = this;

		var path_sections = basepath.split("/");

		if (path_sections[path_sections.length - 1] === "index") {
			path_sections.pop();
		}
		current_page = path_sections.join("/").toLowerCase();

		return callback(null, { "block": block_helpers }, {});
	}

};
