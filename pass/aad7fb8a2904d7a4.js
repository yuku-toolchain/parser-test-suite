var r = /./g;
r[Symbol.replace]('x', 'x');
Object.defineProperty(r, 'lastIndex', {
  writable: false
});