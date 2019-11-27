module.exports = {
    fibonacci: function (n) {
        if (n < 1 || !n) {
            return null;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        else {
            return (module.exports.fibonacci(n - 2) + module.exports.fibonacci(n - 1));
        }
    },

    factorial: function (n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        else {
            return n * module.exports.factorial(n - 1);
        }
    },

    exponentiation: function (base, exponent) {
        if (exponent == 0) {
            return 1;
        }
        else {
            return base * module.exports.exponentiation(base, exponent - 1);
        }
    }
}