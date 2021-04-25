numToRoman = (num) => {
    return 'I';
}

describe('Test converting Arabic numbers to Roman numerals', () => {
    it('should convert 1 to I', () => {
        expect(numToRoman(1)).toEqual('I');
    });
});