var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: 12
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}