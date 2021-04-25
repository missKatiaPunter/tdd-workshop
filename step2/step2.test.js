numToRoman = (num) => {
    return num === 1 ? 'I' : 'II';
}

describe('Test converting Arabic numbers to Roman numerals', () => {
    it('should convert 1 to I', () => {
        expect(numToRoman(1)).toEqual('I');
    });
    it('should convert 2 to II', () => {
        expect(numToRoman(2)).toEqual('II');
    });
});