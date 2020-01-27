// Use this file to override any of the settings that biotope-build uses
// You can find biotope-build's settings here: /node_modules/@biotope/build/config.js
// Examples of settings you can change: 
// serve process port, turn off/on individual build-tasks, plugin settings, etc.

module.exports = {
	project: 'Biotope - The Frontend Ecosystem Framework',
	global: {
		tasks: {
		},
		externalResources: {
			'sanitize.css': 'sanitize.css',
			'@virtualidentity/css-helper': ['base.css'],
			'handlebars': 'dist/handlebars.runtime.js',
			'@webcomponents/webcomponentsjs': [
				'custom-elements-es5-adapter.js'
			  ]
		},
		tsEntryPoints: [
			'resources/ts/**/*.ts',
			'components/**/*.ts'
		]
	},
	webpack: {
		watchScss: true
	},
	uglify: {
		ignoreList: [
		  'resources/js/polyfills/webcomponents-loader.js',
		  'resources/js/polyfills/bundles/webcomponents-ce.js',
		  'resources/js/polyfills/bundles/webcomponents-sd-ce-pf.js',
		  'resources/js/polyfills/bundles/webcomponents-sd-ce.js',
		  'resources/js/polyfills/bundles/webcomponents-sd.js'
		]
	  },
	favicons: {
		path: '/favicons/'
	}
};
