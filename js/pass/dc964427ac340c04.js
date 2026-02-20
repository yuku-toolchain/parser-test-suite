const array = [undefined, 'c', 'b', undefined, 'a', 'd'];
Object.defineProperty(array, '2', {
  get() {
    return this.foo;
  },
  set(v) {
    array[3] = 'foobar';
    this.foo = v;
  }
});
array.sort();