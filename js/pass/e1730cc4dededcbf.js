const arrayPrototypeSymbolIteratorOriginal = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function arrayIterator() {};
let pd = new Temporal.PlainDate(2000, 1, 1);
let zdt = pd.toZonedDateTime("UTC");
Array.prototype[Symbol.iterator] = arrayPrototypeSymbolIteratorOriginal;