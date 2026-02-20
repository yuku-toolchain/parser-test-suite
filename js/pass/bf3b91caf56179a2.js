var fakeError = {
  __proto__: Error.prototype,
  constructor: Error,
  message: '',
  stack: new Error().stack
};
if (typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol') {
  fakeError[Symbol.toStringTag] = 'Error';
}