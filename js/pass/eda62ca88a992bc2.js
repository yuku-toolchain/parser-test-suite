const IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
const iter = Object.create(IteratorPrototype);
var returnCalled = false;
iter.return = function () {
  returnCalled = true;
  return {
    done: true
  };
};
iter[Symbol.dispose]();