var isEnumerable = false;
var newObj = Object.create({}, {
  prop: {
    set: function () {},
    get: function () {},
    configurable: true
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
for (var p in newObj) {
  if (p === "prop") {
    isEnumerable = true;
  }
}