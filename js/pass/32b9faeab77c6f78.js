const array = [undefined, 'c', 'b', undefined, 'a', 'd'];
Object.defineProperty(array, '2', {
  get() {
    return this.foo;
  },
  set(v) {
    array.pop();
    array.pop();
    this.foo = v;
  }
});
array.sort();