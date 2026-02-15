const dtf = Object.create(Intl.DateTimeFormat.prototype);
Object.defineProperty(Intl.DateTimeFormat, Symbol.hasInstance, {
  get() {}
});