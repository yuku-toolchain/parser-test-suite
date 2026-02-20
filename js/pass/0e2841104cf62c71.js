const array = [undefined, 'c', 'b', undefined, 'a', 'd'];
Object.defineProperty(array, '2', {
  get() {
    array.pop();
    array.pop();
    return this.foo;
  },
  set(v) {
    this.foo = v;
  }
});
array.sort();