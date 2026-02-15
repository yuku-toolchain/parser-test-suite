let iter = {
  next() {
    return {
      done: true,
      value: undefined
    };
  }
};
const WrapForValidIteratorPrototype = Object.getPrototypeOf(Iterator.from(iter));
class SubIterator extends Iterator {}
function* g() {}
const GeneratorPrototype = Object.getPrototypeOf(g());