numToRoman = (num) => {
    const unit = 'I';
    if (num === 5) {
        return 'V';
    } else if (num === 4) {
        return 'IV';
    } else {
        return `${unit.repeat(num)}`;
    }
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
});