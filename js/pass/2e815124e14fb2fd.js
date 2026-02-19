const timeout = {
  valueOf() {}
};
const nonSharedArrayTypes = [Int8Array, Uint8Array, Int16Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];
for (const nonSharedArrayType of nonSharedArrayTypes) {
  const typedArray = new nonSharedArrayType(new SharedArrayBuffer(8));
}