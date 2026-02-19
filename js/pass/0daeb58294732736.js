var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var ranCatch = false;
try {
  throw o;
} catch ({...rest}) {
  ranCatch = true;
}