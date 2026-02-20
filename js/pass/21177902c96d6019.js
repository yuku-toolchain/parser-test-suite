var accessed = false;
this.enumerable = true;
var newObj = Object.create({}, {
  prop: this
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}