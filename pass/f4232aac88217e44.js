let iterables = [[], [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
let iterator = Iterator.concat(...iterables);
let array = [].concat(...iterables);
for (let i = 0; i < array.length; i++) {
  let iterResult = iterator.next();
}
let iterResult = iterator.next();