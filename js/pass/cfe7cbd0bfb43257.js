function PoisonedValueOf(val) {
  this.value = val;
  this.valueOf = function () {};
  this.toString = function () {};
}