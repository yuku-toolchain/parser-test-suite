var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: new RegExp()
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}