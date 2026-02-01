var obj = {};
this.value = "global";
Object.defineProperties(obj, {
  property: this
});