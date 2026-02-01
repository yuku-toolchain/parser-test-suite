let object = new Intl.DateTimeFormat();
let newObject = Intl.DateTimeFormat.call(object);
let symbols = Object.getOwnPropertySymbols(newObject);
if (symbols.length !== 0) {}