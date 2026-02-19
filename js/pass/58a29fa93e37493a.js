var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var callCount = 0;
class C {
  static *method({...rest} = o) {
    callCount = callCount + 1;
  }
}
C.method().next();