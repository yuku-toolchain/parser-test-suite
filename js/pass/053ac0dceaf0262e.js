function MyObject(val) {
  this.value = val;
  this.valueOf = function () {
    return this.value;
  };
}
var x = new MyObject(1);
var y = Object(x);