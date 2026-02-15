var fn, fnParam;
var gen, genParam;
var asyncFn, asyncFnParam;
class C {
  static {
    (function ({test262 = fnParam = arguments}) {
      fn = arguments;
    })('function');
    (function* ({test262 = genParam = arguments}) {
      gen = arguments;
    })('generator function').next();
    (async function ({test262 = asyncFnParam = arguments}) {
      asyncFn = arguments;
    })('async function');
  }
}