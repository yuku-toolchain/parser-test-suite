const arrayPrototypeSymbolIteratorOriginal = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function arrayIterator() {};
let pdt = new Temporal.PlainDateTime(2000, 1, 1, 12, 0, 0, 0);
let zdt = pdt.toZonedDateTime("UTC");
Array.prototype[Symbol.iterator] = arrayPrototypeSymbolIteratorOriginal;