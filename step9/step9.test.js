const arabic = [10, 9, 5, 4, 1];
const roman = ['X', 'IX', 'V', 'IV', 'I'];

numToRoman = (num) => {
    let result = '';
    arabic.map((value, index) => {
        while (num >= value) {
            result += roman[index];
            num -= value;
        }
    });
    return result;
}

describe('Test converting Arabic numbers to Roman numerals', () => {
    it.skip('should convert 1 to I', () => {
        expect(numToRoman(1)).toEqual('I');
    });
    it.skip('should convert 2 to II', () => {
        expect(numToRoman(2)).toEqual('II');
    });
    it.skip('should convert 3 to III', () => {
        expect(numToRoman(3)).toEqual('III');
    });
    it.skip('should convert 4 to IV', () => {
        expect(numToRoman(4)).toEqual('IV');
    });
    it.skip('should convert 5 to V', () => {
        expect(numToRoman(5)).toEqual('V');
    });
    it.skip('should convert 6 to VI', () => {
        expect(numToRoman(6)).toEqual('VI');
    });
    it.skip('should convert 7 to VII', () => {
        expect(numToRoman(7)).toEqual('VII');
    });
    it.skip('should convert 8 to VIII', () => {
        expect(numToRoman(8)).toEqual('VIII');
    });
    it.skip('should convert 9 to IX', () => {
        expect(numToRoman(9)).toEqual('IX');
    });
    it.skip('should convert 9 to IX', () => {
        expect(numToRoman(10)).toEqual('X');
    });
});