var assert = require('assert');
var fibonacci = require('../index').fibonacci;
var factorial = require('../index').factorial;
var exponentiation = require('../index').exponentiation;

describe('Testing fibonacci function', function () {
    it('should return null when the value is = 0', function () {
        assert.equal(fibonacci(0), null);
    });
    it('should return null when the value is < 0', function () {
        assert.equal(fibonacci(-42), null);
    });
    it('should return null when the value is < 0', function () {
        assert.equal(fibonacci(-1000), null);
    });
    it('should return null when the value is null', function () {
        assert.equal(fibonacci(null), null);
    });
    it('should return 1 when the value is 1', function () {
        assert.equal(fibonacci(1), 1);
    });
    it('should return 1 when the value is 2', function () {
        assert.equal(fibonacci(2), 1);
    });
    it('should return 2 when the value is 3', function () {
        assert.equal(fibonacci(3), 2);
    });
    it('should return 55 when the value is 10', function () {
        assert.equal(fibonacci(10), 55);
    });
});

describe('Testing factorial function (n should be >= 0)', function () {
    it('should return 120 when the value is 5', function () {
        assert.equal(factorial(5), 120);
    });
    it('should return 6 when the value is 3', function () {
        assert.equal(factorial(3), 6);
    });
    it('should return 1 when the value is 0', function () {
        assert.equal(factorial(0), 1);
    });
});

describe('Testing exponentiation function (exponent should be >= 0)', function () {
    it('should return 125 when the base is 5 and the exponent is 3', function () {
        assert.equal(exponentiation(5, 3), 125);
    });
    it('should return 1024 when the base is 2 and the exponent is 10', function () {
        assert.equal(exponentiation(2, 10), 1024);
    });
    it('should return 1 when the base is 2 and the exponent is 0', function () {
        assert.equal(exponentiation(2, 0), 1);
    });
});