// test('Hello world', () => {});

// test('Hello world', () => {
//     throw new Error();
// });

const { sum } = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
});

















// why testing 
/*  
1. Saves time 
2. Create reliable software 
3. Gives flexiblitiy to developers
    => Refactoring
    => Collaborating 
    => Profiling 
4. Peace of mind  

*/