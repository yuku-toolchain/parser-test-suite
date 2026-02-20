let calls = [];
let symbol = Symbol();
Symbol.prototype.length = 1;
Object.defineProperty(Symbol.prototype, 'length', {
  get() {
    calls.push('length');
    return 1;
  }
});
Object.defineProperty(Symbol.prototype, '0', {
  get() {
    calls.push('0');
    return 'en';
  }
});
new Intl.DisplayNames(symbol, {
  type: 'language'
});