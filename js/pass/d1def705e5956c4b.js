var accessed = false;
Math.enumerable = true;
var newObj = Object.create({}, {
  prop: Math
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}