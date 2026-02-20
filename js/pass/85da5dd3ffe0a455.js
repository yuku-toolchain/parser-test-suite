var iab = new ArrayBuffer(8).transferToImmutable();
var view = new DataView(iab);
var calls = [];
var byteOffset = {
  valueOf() {
    calls.push("byteOffset.valueOf");
    return 0;
  }
};
var value = {
  valueOf() {
    calls.push("value.valueOf");
    return "1";
  }
};
calls = [];