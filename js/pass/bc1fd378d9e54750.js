var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(TypedArrayPrototype, Symbol.toStringTag).get;
var ab = new ArrayBuffer(8);
var dv = new DataView(ab, 0, 1);