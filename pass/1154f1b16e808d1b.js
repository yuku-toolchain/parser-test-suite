var array = [Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
var arrayIndex = -1;
function mapFn(value, index) {
  this.arrayIndex++;
  return value;
}
var a = Array.from(array, mapFn, this);