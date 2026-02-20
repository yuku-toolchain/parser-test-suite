const nf = Object.create(Intl.NumberFormat.prototype);
Object.defineProperty(Intl.NumberFormat, Symbol.hasInstance, {
  get() {}
});