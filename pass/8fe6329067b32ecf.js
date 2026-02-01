const array = [undefined, 'c', 'b', undefined, 'a', 'd'];
Object.defineProperty(array, '2', {
  get() {
    delete array[3];
    return this.foo;
  },
  set(v) {
    this.foo = v;
  }
});
array.sort();