numToRoman = (num) => {
// From 5 up we need to start with V, then append Is
    const unit = 'I';
    let remaining = num;
    let result = '';
    if (remaining >= 9) {
        result += 'IX';
        remaining -= 9;
    } else if (remaining >= 5) {
        result += 'V';
        remaining -= 5;
    } else if (num === 4) {
        result += 'IV';
        remaining -= 4;
    }
    result += `${unit.repeat(remaining)}`;
    return result;
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
    it('should convert 4 to IV', () => {
        expect(numToRoman(4)).toEqual('IV');
    });
    it('should convert 5 to V', () => {
        expect(numToRoman(5)).toEqual('V');
    });
    it('should convert 6 to VI', () => {
        expect(numToRoman(6)).toEqual('VI');
    });
    it('should convert 7 to VII', () => {
        expect(numToRoman(7)).toEqual('VII');
    });
    it('should convert 8 to VIII', () => {
        expect(numToRoman(8)).toEqual('VIII');
    });
    it('should convert 9 to IX', () => {
        expect(numToRoman(9)).toEqual('IX');
    });
});