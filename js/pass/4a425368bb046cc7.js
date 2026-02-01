var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: "false"
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}