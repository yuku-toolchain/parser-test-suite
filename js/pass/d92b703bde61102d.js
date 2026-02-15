let IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
let sentinel = 'a';
let {get, set} = Object.getOwnPropertyDescriptor(Iterator.prototype, Symbol.toStringTag);
let FakeGeneratorPrototype = Object.create(IteratorPrototype);
Object.freeze(IteratorPrototype);
FakeGeneratorPrototype[Symbol.toStringTag] = sentinel;
let o = {
  [Symbol.toStringTag]: sentinel + 'a'
};
set.call(o, sentinel);