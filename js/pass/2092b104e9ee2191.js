Object.defineProperty(Intl.NumberFormat.prototype, Symbol.toStringTag, {
  value: 'Alpha'
});
delete Intl.NumberFormat.prototype[Symbol.toStringTag];