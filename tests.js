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
// // Unit tests for the sayHello function
// describe('sayHello', function() {
//     it('should be a defined function', function() {
//         expect(typeof helloWorld).toBe('function');
//     });
//     it("should return a string when called", function() {
//         expect (typeof sayHello()).toBe('string')
//     });
//     it('should return the string "Hello, (name)" when executed', function() {
//         expect(sayHello(name)).toBe("Hello, " + name + "!");
//     });
//     it('should return the string "Hello, Jane!" when passed the input of ("Jane")', function() {
//         expect(sayHello('Jane')).toBe("Hello, Jane!");
//     });
//     it('should return the string "Hello, Alex!" when passed the input of ("Alex")', function() {
//         expect(sayHello('Alex')).toBe("Hello, Alex!");
//     });
// });
//

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect (typeof sayHello).toBe('function');
        });
    it('should return a string when called', function() {
        expect (typeof sayHello()).toBe("string");
        });

});









