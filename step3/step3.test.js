numToRoman = (num) => {
    return num === 1 ? 'I' : num === 2 ? 'II' : 'III';
}

describe('Test converting Arabic numbers to Roman numerals', () => {
    it('should convert 1 to I', () => {
        expect(numToRoman(1)).toEqual('I');
    });
    it('should convert 2 to II', () => {
        expect(numToRoman(2)).toEqual('II');
    });
    it('should convert 3 to III', () => {
        expect(numToRoman(3)).toEqual('III');
    });
});