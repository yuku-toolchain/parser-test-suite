var regexp = /\w/;
Object.defineProperty(regexp, 'flags', {
  value: {
    toString() {
      return 'g';
    }
  }
});
var str = 'a*b';