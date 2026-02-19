var exec = function () {
  execCount += 1;
  if (execCount === 1) {
    return [''];
  }
  return null;
};
var r, result, execCount;
r = /a/g;
r.exec = exec;
Object.defineProperty(r, 'global', {
  writable: true
});
execCount = 0;
r.global = undefined;
r[Symbol.match]('aa');
execCount = 0;
r.global = null;
r[Symbol.match]('aa');
execCount = 0;
r.global = false;
r[Symbol.match]('aa');
execCount = 0;
r.global = NaN;
r[Symbol.match]('aa');
execCount = 0;
r.global = 0;
r[Symbol.match]('aa');
execCount = 0;
r.global = '';
r[Symbol.match]('aa');
r = /a/;
r.exec = exec;
Object.defineProperty(r, 'global', {
  writable: true
});
r.global = true;
execCount = 0;
r[Symbol.match]('aa');
r.global = 86;
execCount = 0;
r[Symbol.match]('aa');
r.global = Symbol.match;
execCount = 0;
r[Symbol.match]('aa');
r.global = {};
execCount = 0;
r[Symbol.match]('aa');