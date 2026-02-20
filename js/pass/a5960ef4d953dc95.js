var accessed = false;
JSON.enumerable = true;
var newObj = Object.create({}, {
  prop: JSON
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}