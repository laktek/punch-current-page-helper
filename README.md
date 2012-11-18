# Punch Current Page Helper

Simple helper that adds "current" class to a link if it points to the current page.

This helper is intended to use with [Punch](http://laktek.github.com/punch) web publishing framework.

## How to Use 

* Install the package

	`npm install punch-current-page-helper`

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"helpers": {
				"current_page_helper": "./helpers/current_helper.js",
			}

		}

* Then you can use the helper in your templates like this:

		<a href="/about" class="{{#current}}/about{{/current}}">About</a>

This will add the `current` class to the link when the user visits the `/about` page.

**Note**: Between the section tags `{{#current}}..{{/current}}` you have to place the URL you want to check as the current. Make sure you always use relative URLs instead of absolute URLs.

## License

Copyright (c) 2012 Lakshan Perera  
Licensed under the MIT license.
