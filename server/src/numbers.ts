const decimal: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

export default function fromRoman(num: string): number {
    let result: number = 0;
    let i: number = 0;
    for (; i < decimal.length; i++) {
        while (num.indexOf(roman[i]) === 0) {
            result += decimal[i];
            num = num.replace(roman[i], "");
        }
    }
    return result;
}
