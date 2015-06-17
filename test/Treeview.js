'use strict';

import Treeview from '../src/Treeview';

describe('Treeview', function() {
	it('should render component', function() {
		assert.doesNotThrow(function() {
			new Treeview().render();
		});
	});
});
