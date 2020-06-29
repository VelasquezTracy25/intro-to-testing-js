// Unit tests for the hello function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called "Hello, World!"', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//
// // Tests for an even number
// describe ("isEven", function() {
//     it('should be a defined function', function(){
//         expect(typeof isEven).toBe("function");
//     });
//     it('should return a boolean value', function() {
//         expect(typeof isEven()).toBe("boolean");
//     });
//       it('should return true when passed a value of 10', function(){
//       expect(isEven(10)).toBe(true);
//     });
// });
//
//
// // Unit tests for the sayHello functio
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect (typeof sayHello).toBe('function');
        });
    it('should return a string when called', function() {
        expect (typeof sayHello()).toBe("string");
        });
    it('should return "Hello, Jane!', function(){
    expect (sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!', function(){
        expect (sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!', function(){
        expect (sayHello('Pat')).toBe("Hello, Pat!");
    });
    it ('should return "Hello, World!" when passed undefined', function(){
        expect(sayHello(undefined)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" when passed a true value', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" when passed a false value', function(){
    expect(sayHello(false)).toBe("Hello, World!");
    });
});



describe('isFive', function() {
    it('should be a defined function', function() {
        expect (typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect (typeof isFive()).toBe('boolean');
    });
    it('should return true when passed a value of 5', function() {
        expect (isFive(5)).toBe(true);
    });
    it('should return true when passed a string of 5', function() {
        expect (isFive('5')).toBe(true);
    });
});


describe('isEven', function() {
    it('should be a defined function', function() {
        expect (typeof isEven).toBe('function');
    });
    it('should return true when passed a value of 2', function(){
      expect (isEven(2)).toBe(true);
    });
    it('should return true when passed a value of -4', function(){
        expect (isEven(-4)).toBe(true);
    });
    it('should return true when passed a value of 3', function(){
        expect (isEven(3)).toBe(false);
    });
    it('should return true when passed a string of banana', function(){
        expect (isEven("banana")).toBe(false);
    });
    it('should return true when passed a string of 8', function(){
        expect (isEven(8)).toBe(true);
    });
    it('should return true when passed a value of Infinity', function(){
        expect (isEven(Infinity)).toBe(true);
    });
    it('should return false when passed a boolean of true', function(){
        expect (isEven(true)).toBe(false);
    });
    it('should return false when passed a boolean of false', function(){
        expect (isEven(true)).toBe(false);
    });
    it('should return false when empty', function(){
        expect (isEven()).toBe(false);
    });
});






