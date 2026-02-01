var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: new Error()
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}