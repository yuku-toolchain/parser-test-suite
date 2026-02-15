function CustomIterator(array) {
  this.i = 0;
  this.array = array;
}
CustomIterator.prototype[Symbol.iterator] = function () {
  return this;
};
CustomIterator.prototype.next = function () {
  if (this.i >= this.array.length) {
    return {
      "done": true
    };
  }
  return {
    "value": this.array[this.i++],
    "done": false
  };
};
const transforms = [a => a, a => a[Symbol.iterator](), a => new CustomIterator(a)];
const lf = new Intl.ListFormat("es-ES", {
  "style": "narrow",
  "type": "unit"
});
for (const f of transforms) {}