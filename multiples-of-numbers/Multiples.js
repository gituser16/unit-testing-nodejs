'use strict';

function Multiples() {}

var _prototype = Multiples.prototype;

/**
 * Finds the sum of all different multiples for a and b that are below p, where
 * @param a an integer greater than 0
 * @param b an integer greater than 0
 * @param p an integer greater than a and b
 */
_prototype.sum = function(a, b, p) {
	var sum = 0;

	if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(p)) {
		throw new RangeError("Parameters must be integers");
	}

	if (a <= 0 || b <= 0 || p <= 0) {
		throw new RangeError("Parameters must be greater than 0");
	}

	if (p <= a || p <= b) {
		throw new Error("p must be greater than a and b");
	}

	for (var i = 1; a * i < p; i++) {
		sum += a * i;
	}

	if (a === b) {
		return sum;
	}

	for (var i = 1; b * i < p; i++) {
		if (i % a !== 0) {
			sum += b * i;
		}
	}

	return sum;
};

module.exports = Multiples;