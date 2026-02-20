var regexp = /\w/;
Object.defineProperty(regexp, 'flags', {
  value: {
    valueOf() {
      ERROR('valueOf Should not be called');
    },
    toString() {}
  }
});