'use strict';

function MultiplesImproved() {}

var _prototype = MultiplesImproved.prototype;

/**
 * Finds the sum of all different multiples for a and b that are below p, where
 * @param a an integer greater than 0
 * @param b an integer greater than 0
 * @param p an integer greater than a and b
 */
_prototype.sum = function(a, b, p) {
	if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(p)) {
		throw new RangeError("Parameters must be integers");
	}

	if (a <= 0 || b <= 0 || p <= 0) {
		throw new RangeError("Parameters must be greater than 0");
	}

	if (p <= a || p <= b) {
		throw new Error("p must be greater than a and b");
	}
	
	var n = parseInt(p / a),
		m = parseInt(p / b),
		product = a * b,
		k = parseInt(p / product);

	if (p * (n + m + 2) > Number.MAX_SAFE_INTEGER) {
		throw new RangeError("Calculations over Number.MAX_SAFE_INTEGER");
	}

	n = p % a === 0 ? n - 1 : n;
	m = p % b === 0 ? m - 1 : m;
	k = p % product === 0 ? k - 1 : k;

	var sumAMultiples = a * this.triangularNumber(n);

	if (a === b) {
		return sumAMultiples;
	}

	var sumBMultiples = b * this.triangularNumber(m);
	var sumABMultiples = a * b * this.triangularNumber(k);

	return sumAMultiples + sumBMultiples - sumABMultiples;
};

_prototype.triangularNumber = function(n) {
	return n * (n + 1) / 2;
};

module.exports = MultiplesImproved;