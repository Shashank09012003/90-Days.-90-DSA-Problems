// 76.Implement Pow
// Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).
class Solution {
    /**
     * Computes b raised to the power e iteratively.
     * @param {number} b - The base, a floating-point number.
     * @param {number} e - The exponent, an integer.
     * @returns {number} - The result of b^e.
     */
    power(b, e) {
        if (e === 0) {
            return 1;
        }
        let result = 1;
        let absE = Math.abs(e);
        let base = b;
        while (absE > 0) {
            if (absE & 1) {
                result *= base;
            }
            base *= base;
            absE = absE >> 1;
        }
        return e < 0 ? 1 / result : result;
    }
}