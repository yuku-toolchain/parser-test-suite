var target = {
  a: 1
};
var result = Object.assign(target, "1a2c3", {
  a: "c"
}, undefined, {
  b: 6
}, null, 125, {
  a: 5
});