var obj = {};
var accessed = false;
this.enumerable = true;
Object.defineProperties(obj, {
  prop: this
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}