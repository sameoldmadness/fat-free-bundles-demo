(function () {
	'use strict';

	function square(x) {
		return x * x;
	}

	square.root = function (x) {
		return Math.sqrt(x);
	}

	var result = square(-2);

	console.log(result);

}());