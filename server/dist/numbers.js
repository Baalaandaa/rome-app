"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
function fromRoman(num) {
    let result = 0;
    let i = 0;
    for (; i < decimal.length; i++) {
        while (num.indexOf(roman[i]) === 0) {
            result += decimal[i];
            num = num.replace(roman[i], "");
        }
    }
    return result;
}
exports.default = fromRoman;
//# sourceMappingURL=numbers.js.map