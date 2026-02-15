var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: undefined
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}