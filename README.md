<!DOCTYPE html>
<html>
<head>
	<title>Unit Testing in NodeJS</title>
	<link rel="stylesheet" type="text/css" href="css/unit-testing-style.css">
</head>
<body>
	<h2>Unit Testing</h2>
	<div class="paragraph">Unit Testing is essential part of the Agile Methodologies. In these methodologies changes are welcome, so, <span class="blue">refactoring code</span> is a common task. Unit Tests are crucial to keep Working Software, as a rule Unit Tests are written before the code and updated them each time changes come up. Each method must have Unit Tests and pass all of them before the released, if a bug is found, a set of Unit Tests for it must be created.</div>
	<div class='subtitle'>Benefits of using Unit Tests</div>
	<ul>
		<li>Finds problems early in the Software Development Life Cycle (SDLC)</li>
		<li>Preserve behavior when refactoring code</li>
		<li>Living Documentation</li>
		<li>Exceptions are documented</li>
		<li>Helps in the design process</li>
	</ul>
	<div class="paragraph">Unit Tests are written based on the criteria that becomes in the <span class='blue-bold'>design contract for the method</span>. This design contract can be updated during the Software Development Life Cycle (SDLC). The Unit Test should run either when the design contract is affected or the method is refactored in order to fix issues, improve performance or meet new requirements.</div>
	<div class="paragraph">Unit Tests helps a lot to keep individuals modules working, to communicate changes in business rules, to avoid breaking the module, to avoid re-work, to save time in regression testing or integration testing. Helps other developer to communicate what the method does.</div>
	<div class='subtitle'>Good qualities of Unit Tests</span></div>
	<div class="paragraph">Unit Tests should follow the acronym <span class='blue-bold'>FIRST</span></div>
	<div class='acronym-group paragraph'>
		<div class='acronym blue-bold'>F</div><div class='acronym-meaning'>ast</div>
		<div class='acronym blue-bold'>I</div><div class='acronym-meaning'>solated</div>
		<div class='acronym blue-bold'>R</div><div class='acronym-meaning'>epeatable</div>
		<div class='acronym blue-bold'>S</div><div class='acronym-meaning'>elf-validating</div>
		<div class='acronym blue-bold'>T</div><div class='acronym-meaning'>imely</div>
	</div>
	<div class="paragraph"><span class="blue-bold">FIRST</span> was created by Tim Ottinger and Brett Schubert</div>
	<div class="paragraph"><b>Fast:</b> many hundreds or thousands per second.</div>
	<div class="paragraph"><b>Isolated:</b> failure reasons become obvious. The Unit Test should states the expecting assertion when certain conditions are met, so, the reason to fail is obvious. The Unit Test should do the <span class="blue-bold">3 As (Arrange, Act, Assert)</span>
		<ul>
			<li><b>Arrange:</b> The data needed for the test should be declared in the Unit Test.</li>
			<li><b>Act:</b> Invoke the actual method to be tested.</li>
			<li><b>Assert:</b> Compare the expecting result with the actual result from the method tested.</li>
		</ul>
	</div>
	<div class="paragraph"><b>Repeatable:</b> Unit Tests should no depend on initial states, for example if the method depends on a database connection and if the database is not available by the time the Unit Test is run, that will cause the test to fail, in those conditions the Unit Test is not repeatable. In general, Unit Tests should no depends on external services, networks, connections or systems.</div>
	<div class="paragraph"><b>Self-validating:</b> no manual evaluation or interpretation are required. An error should be thrown when the test has not passed, so, the test does not depend on manual inspection or data arrangement.</div>
	<div class="paragraph"><b>Timely:</b> Wright the Unit Test to meet the requirements or criteria before to implement the method that will be evaluated, would be ideal in the SDLC, but most of the time this is not possible, since at the beginning of the process we do not have all the information needed, so we need to start with the information gathered so far and work iteratively. We can start by writing simple statements for our Unit Tests, wright the method to meet those statements, get more information (if needed), add the statements needed for the Unit Tests and update the method, repeat this process until business rules are met.</div>
	<div class="subtitle">Example</div>
	<div class="paragraph">Imagine in a hypothetic situation that you are given the following problem:</div>
	<div class="marquee">Find the sum of all different <b>multiples</b> for <b>a</b> and <b>b</b> that are below <b>p</b>, where:
		<ul class="list-lower-roman">
			<li>a, b and p are integers</li>
			<li>0 < a < p</li>
			<li>0 < b < p</li>
		</ul>
	</div>
	<div class="paragraph">For example if the numbers are 2, 3 and 10, you have the following multiples: 2, 3, 4, 6, 8 and 9, the sum is 32.</div>
	<div class="paragraph">For now we can write the following statements for our Unit Tests:</div>
	<div class="marquee">
		<ul class="list-lower-roman">
			<li>should throw a range error when parameters are 1.1, 3.5 and 10: Parameters must be integers</li>
			<li>should throw a range error when parameters are -2, 7 and 60: Parameters must be greater than 0</li>
			<li>should throw a range error when parameters are 5, 11 and 10: p must be greater than a and b</li>
			<li>should return 32 when parameters are 2, 3 and 10</li>
			<li>should return 20 when parameters are 2, 2 and 10</li>
			<li>should return 9 when parameters are 2, 3 and 5</li>
		</ul>
	</div>
	<div class="paragraph">
		If we list the multiples of 2 and 3 that are below 10 we have		
		<ul class="list-none-style">
			<li><b>2 =></b> 2, 4, 6, 8</li>
			<li><b>3 =></b> 3, <span class="read-bold">6</span>, 9</li>
		</ul>			
		We need to remove one of the 6s since they are repeated and get the sum.
	</div>
	<div class="paragraph">
		Since this is about Node.js, we are going to use JavaScript to write the method that will pass our Unit Tests, you can download the code for this example by clicking <a href="https://github.com/serodya/algorithms-csharp/archive/master.zip">here</a>. Below is the first version of the method sum():
	</div>
	<div class="code">
	<pre>
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
	</pre>
	</div>	
	<div class="paragraph">
		In order to run the Unit Tests we need to <a href="https://nodejs.org" target="_blank">install Node.js</a>, once you have it, you need to open the <span class="blue-bold">Node.js command prompt</span>, go to the root folder for this example, then install <a href="http://mochajs.org/" target="_blank">Mocha</a> and <a href="http://chaijs.com/" target="_blank">Chai</a> using the below command in the console.
	</div>	
	<div class="marquee">npm install mocha chai</div>
	<div class="paragraph"><b>Mocha</b> needs a folder named <b>test</b> where you can add all your files that will do Unit Testing, if you already downloaded the code for this example, you can go to the root folder in the Node.js console and run the below command to execute the Unit Tests. For more info visit <a href="http://mochajs.org/#getting-started">Mocha getting started</a> and <a href="http://chaijs.com/api/bdd/" target="_blank">Chai Assertion Library</a></div>
	<div class="marquee">mocha</div>
	<div class="paragraph"><b>Mocha</b> will find the <b>test</b> folder and will run all the Unit Tests under the folder. The result will be displayed in the Node.js console as follow.</div>
	<div class="marquee"><img src="images/unit-tests-multiples-01.png" /></div>
	<div class="paragraph blue-bold">describe(), it(), beforeEach(), should(), expect...</div>
	<div class="paragraph">
		<ul>
			<li><b>describe():</b> To execute the test cases you will start with <b>describe()</b> method, that takes two parameters: name of your test and a callback function, describe() methods can be nested, so you can named the parent describe() as your class and the nested as the methods, in this example the class is <b>Multiples</b> and the method is <b>sum</b></li>
			<li><b>it():</b> function will execute the method to test, it() takes two parameters, the description of the test and a callback function. Chai will grab the method to test adding methods like <b>should</b>, so you can use assertions like <span class="blue-bold">sum.should.equal(20)</span></li>
			<li><b>beforeEach():</b> is useful when you have the same arrangement more than once for different tests. beforeEach() takes a function as a parameter, this function will be executed before each test</li>
			<li><b>expect():</b> you can use the expect() method to check for errors, expect() takes a function as a parameter</li>
		</ul>
	</div>	
	<div class="paragraph">Below is the code that yield the output displayed above. There is a default "BDD"-style interface that you can see <a href="http://mochajs.org/#hooks" target="_blank">here</a></div>
	<div class="code">
	<pre>
	'use strict';

	var Multiples = require('../multiples-of-numbers/Multiples'),
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
		});	
	});
	</pre>
	</div>
	<div class="subtitle">Large numbers</div>
	<div class="paragraph">So far we have simple test cases, what will happen if we use the parameters 2, 7 and 9007199254740991 (<span class="blue">Number.MAX_SAFE_INTEGER</span>). We do not know the result, but we can add the test case.</div>
	<div class="marquee">
	<pre>
			it('should return ? when paramaters are 2, 7 and 9007199254740991', function() {
				var sum = multiples.sum(2, 7, 9007199254740991);

				//sum.should.equal(?);
			});	
	</pre>
	</div>
	<div class="paragraph">If you run the "mocha" command, you will see the first 6 test cases passing, but the last one will never end. One of the problems here is when the calculations involve the Number.MAX_SAFE_INTEGER the result is uncertain, for example the results of the below statements are incorrect.</div>
	<div class="code">
	<pre>
	Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; <span class="blue-bold">result = true</span>
	(Number.MAX_SAFE_INTEGER + 1) % 2; <span class="blue-bold">result = 0</span>
	(Number.MAX_SAFE_INTEGER + 2) % 2; <span class="blue-bold">result = 0</span>
	</pre>		
	</div>
	<div class="paragraph">So we are going to re-write the function, based on the following fact:</div>	
	<div class="center"><img src="images/triangular-number.gif"></div>
	<div class="paragraph">The conditions for the problem of Multiples ensure that exists n, m and k integers where they are the max factor for a, b and (a*b) that are below p, in other words</div>
	<div class="code">
	<pre>
	0 < p - a*n < a
	0 < p - b*m < b
	0 < p - a*b*k < a*b
	</pre>		
	</div>
	<div class="paragraph">The result that we are looking for is:</div>
	<div class="center"><img src="images/sum.gif"></div>
	<div class="paragraph">Since we cannot make operations over Number.MAX_SAFE_INTEGER, we need to find an upper bound condition for the parameters a, b and p. In the below equations <span class="blue">maxSafeInteger = Number.MAX_SAFE_INTEGER</span></div>
	<div class="center"><img src="images/bound-condition.gif"></div>
	<div class="paragraph">We do not need to check the value of <span class="blue">abk(k + 1)/2</span> since sum is always greater than 0 and if <span class="blue">ab > p</span>, k will be 0. So, it is enough to meet the upper bound condition (2).</div>
	<div class="paragraph">
	Using the formula (1) and the upper bound condition (2), the method sum() will be as follow.
	</div>
	<div class="code">
	<pre>
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
	</pre>
	</div>
	<div class="paragraph">
	Now, we have better info than at the beginning, at this point we are able to predict the result for some test cases, even we can get an edge test case that yet meet the upper bound condition (2), for example 2, 7 and 137532243 will work, but 2, 7 and 137532244 will throw the expected range error. The result of these Unit Tests is displayed below.	
	</div>
	<div class="marquee"><img src="images/unit-tests-multiples-02.png"></div>
</body>
</html>