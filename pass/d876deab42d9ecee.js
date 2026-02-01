function Splittable(value) {
  this.toString = function () {
    return value + "";
  };
  this.valueOf = function () {};
}
Splittable.prototype.split = String.prototype.split;
let splittable = new Splittable(void 0);