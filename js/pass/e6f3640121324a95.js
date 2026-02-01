var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(TypedArrayPrototype, "length").get;
var s = Symbol("s");