const array = [undefined, 'c', 'b', undefined, 'a', 'd'];
Object.defineProperty(array, '2', {
  get() {
    return this.foo;
  },
  set(v) {
    array.length = array.length + 2;
    this.foo = v;
  }
});
array.sort();