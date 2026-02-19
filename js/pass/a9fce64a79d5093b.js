var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(TypedArrayPrototype, "byteLength").get;
var s = Symbol("s");