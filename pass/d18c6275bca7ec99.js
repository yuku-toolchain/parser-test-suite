let valueAccesses = 0;
let iter = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          get value() {
            ++valueAccesses;
          },
          done: true
        };
      }
    };
  }
};
Array.from(Iterator.concat(iter, iter, iter));