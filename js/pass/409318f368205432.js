var r = /b/g;
Object.defineProperty(r, 'global', {
  value: false
});
r[Symbol.match]('abc');