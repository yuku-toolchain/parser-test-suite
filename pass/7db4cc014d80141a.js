const arrayPrototypeSymbolIteratorOriginal = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function arrayIterator() {};
let inst = new Temporal.Instant(0n);
let zdt = inst.toZonedDateTimeISO("UTC");
Array.prototype[Symbol.iterator] = arrayPrototypeSymbolIteratorOriginal;