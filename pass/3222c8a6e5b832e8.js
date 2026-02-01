var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(TypedArrayPrototype, "buffer").get;
var ab = new ArrayBuffer(8);
var dv = new DataView(new ArrayBuffer(8), 0);