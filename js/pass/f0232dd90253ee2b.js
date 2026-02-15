var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: null
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}