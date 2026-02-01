let iterator = [1, 2, 3, 4, 5][Symbol.iterator]();
let ret = iterator.every(v => v < 4);
let {done, value} = iterator.next();
({done, value} = iterator.next());