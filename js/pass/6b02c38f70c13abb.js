const arrayPrototypeSymbolIteratorOriginal = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function arrayIterator() {};
const instance = new Temporal.PlainYearMonth(2023, 5, "iso8601");
instance.since({
  year: 2005,
  month: 3
});
Array.prototype[Symbol.iterator] = arrayPrototypeSymbolIteratorOriginal;