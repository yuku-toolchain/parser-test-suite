var count = 0;
Object.defineProperties(this, {
  x: {
    value: 1
  },
  y: {
    get() {
      count++;
      return 1;
    }
  }
});