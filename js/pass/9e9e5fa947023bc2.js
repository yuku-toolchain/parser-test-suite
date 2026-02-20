let iterator = [1, 2, 3, 4, 5][Symbol.iterator]();
let ret = iterator.some(v => v > 3);
let {done, value} = iterator.next();
({done, value} = iterator.next());