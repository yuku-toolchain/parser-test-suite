const getter = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description').get;
const symbol = Symbol('test');
const empty = Symbol();
const undef = Symbol(undefined);
const emptyStr = Symbol('');