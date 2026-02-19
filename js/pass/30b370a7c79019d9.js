var accessed = false;
var newObj = Object.create({}, {
  prop: {
    enumerable: "AB\n\\cd"
  }
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}