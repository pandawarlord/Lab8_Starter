// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Dashes and Parenthesis', () => {
    expect(functions.isPhoneNumber('(999)999-9999')).toBe(true);
});

test('Not Number', () => {
    expect(functions.isPhoneNumber('cum')).toBe(false);
});

test('Long', () => {
    expect(functions.isPhoneNumber('9999999999999999999999999999-9999999999999999999999999999999999')).toBe(true);
});

test('Too Short', () => {
    expect(functions.isPhoneNumber('99')).toBe(false);
});

test('My Email', () => {
    expect(functions.isEmail('kvle@ucsd.edu')).toBe(true);
});
    
test('underscore', () => {
    expect(functions.isEmail('teee_heee@gmail.com')).toBe(true);
});
    
test('Not .com', () => {
    expect(functions.isEmail('hi@Im.abouttobussssss')).toBe(false);
});
    
test('No @', () => {
    expect(functions.isEmail('ballshehehe')).toBe(false);
});

test('Upper, special character, and number', () => {
    expect(functions.isStrongPassword('P3N!5')).toBe(false);
});
        
test('No Lowercase', () => {
    expect(functions.isStrongPassword('PP@PPPP@$PP')).toBe(false);
});
        
test('Only Lowercase', () => {
    expect(functions.isStrongPassword('balls')).toBe(true);
});
        
test('Only Uppercase', () => {
    expect(functions.isStrongPassword('BALLS')).toBe(true);
});

test('Shortened Date', () => {
    expect(functions.isDate('2/9/02')).toBe(false);
});
    
test('Furture date', () => {
    expect(functions.isDate('02/09/2033')).toBe(true);
});
    
test('Past Date', () => {
    expect(functions.isDate('02/09/2003')).toBe(true);
});
    
test('Letters', () => {
    expect(functions.isDate('A/B/C')).toBe(false);
});

test('Real Hex', () => {
    expect(functions.isHexColor('#000001')).toBe(true);
});

test('Short', () => {
    expect(functions.isHexColor('666')).toBe(true);
});

test('Too Long', () => {
    expect(functions.isHexColor('99999999999999999999999')).toBe(false);
});

test('Word', () => {
    expect(functions.isHexColor('MUC')).toBe(false);
});