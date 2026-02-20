Array.print = print;
var r = /a/g;
Object.defineProperty(r, 'global', {
  writable: true
});
r.lastIndex = 0;
r.global = undefined;
r.lastIndex = 0;
r.global = null;
r.lastIndex = 0;
r.global = false;
r.lastIndex = 0;
r.global = NaN;
r.lastIndex = 0;
r.global = 0;
r.lastIndex = 0;
r.global = '';
var execCount = 0;
r = /a/;
Object.defineProperty(r, 'global', {
  writable: true
});
r.exec = function () {
  execCount += 1;
  if (execCount === 1) {
    return ['a'];
  }
  return null;
};
execCount = 0;
r.global = true;
r[Symbol.replace]('aa', 'b');
execCount = 0;
r.global = 86;
r[Symbol.replace]('aa', 'b');
execCount = 0;
r.global = Symbol.replace;
r[Symbol.replace]('aa', 'b');
execCount = 0;
r.global = {};
r[Symbol.replace]('aa', 'b');