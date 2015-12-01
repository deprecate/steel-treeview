'use strict';

var metalKarmaConfig = require('metal-karma-config/coverage');

module.exports = function (config) {
	metalKarmaConfig(config);

	config.files.push('bower_components/crystal*/src/**/*.js');
	config.preprocessors['bower_components/crystal*/**/*.js'] = ['babel', 'commonjs'];
};
