var iter = (/./)[Symbol.matchAll]('');
Object.defineProperty(RegExp.prototype, 'exec', {
  get() {}
});