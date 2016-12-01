'use strict';

var Multiples = require('../multiples-of-numbers/MultiplesImproved'),
	chai = require('chai'),
	should = chai.should(),
	expect = chai.expect;

describe('Multiples', function() {
	var multiples;

	beforeEach(function() {
		multiples = new Multiples();
	});

	describe('#sum()', function() {
		it('should throw a range error when parameters are 1.1, 3.5 and 10: Parameters must be integers', function() {
			expect(function() {
				var sum = multiples.sum(1.1, 3.5, 10);	
			}).to.throw(RangeError);
		});

		it('should throw a range error when parameters are -2, 7 and 60: Parameters must be greater than 0', function() {
			expect(function() {
				multiples.sum(-2, 7, 60);
			}).to.throw(RangeError);			
		});

		it('should throw a range error when parameters are 5, 11 and 10: p must be greater than a and b', function() {
			expect(function() {
				multiples.sum(5, 11, 10);
			}).to.throw(Error);
		});

		it('should throw a range error when paramaters are 2, 7 and 9007199254740991: Calculations over Number.MAX_SAFE_INTEGER', function() {
			expect(function() {
				multiples.sum(2, 7, 9007199254740991);
			}).to.throw(RangeError);
		});

		it('edge case --> should throw a range error when paramaters are 3, 7 and 137532244: Calculations over Number.MAX_SAFE_INTEGER', function() {
			expect(function() {
				multiples.sum(3, 7, 137532244);
			}).to.throw(RangeError);
		});

		it('should return 32 when paramaters are 2, 3 and 10', function() {
			var sum = multiples.sum(2, 3, 10);

			sum.should.equal(32);
		});			

		it('should return 20 when paramaters are 2, 2 and 10', function() {
			var sum = multiples.sum(2, 2, 10);

			sum.should.equal(20);
		});

		it('should return 9 when paramaters are 2, 3 and 5', function() {
			var sum = multiples.sum(2, 3, 5);

			sum.should.equal(9);
		});

		it('should return 277777722224 when paramaters are 2, 9 and 1000000', function() {
			var sum = multiples.sum(2, 9, 1000000);

			sum.should.equal(277777722224);
		});

		it('should return 19696965303033 when paramaters are 3, 11 and 10000000', function() {
			var sum = multiples.sum(3, 11, 10000000);

			sum.should.equal(19696965303033);
		});

		// edge case, all the calculations involved are under Number.MAX_SAFE_INTEGER
		it('edge case --> should return 4053239493297997 when paramaters are 3, 7 and 137532243', function() {
			var sum = multiples.sum(3, 7, 137532243);

			sum.should.equal(4053239493297997);
		});		
	});	
});