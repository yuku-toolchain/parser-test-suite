let object = new Intl.NumberFormat();
let newObject = Intl.NumberFormat.call(object);
let symbols = Object.getOwnPropertySymbols(newObject);
if (symbols.length !== 0) {}