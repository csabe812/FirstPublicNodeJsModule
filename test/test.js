var assert = require('assert');
var fibonacci = require('../index').fibonacci;

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