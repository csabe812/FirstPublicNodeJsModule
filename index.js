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
    }
}