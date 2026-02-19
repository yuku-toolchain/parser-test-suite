let IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let sentinel = {};
let {get, set} = Object.getOwnPropertyDescriptor(Iterator.prototype, 'constructor');
let FakeGeneratorPrototype = Object.create(IteratorPrototype);
Object.freeze(IteratorPrototype);
FakeGeneratorPrototype.constructor = sentinel;
let o = {
  constructor: sentinel + 'a'
};
set.call(o, sentinel);