var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: -9
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}