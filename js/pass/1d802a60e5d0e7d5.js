var obj = {};
Object.defineProperties(obj, {
  prop: {
    value: 1001
  }
});
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {}
}