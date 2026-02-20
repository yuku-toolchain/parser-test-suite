var f = new Function("arg1,arg2,arg3", "arg4,arg5", null);
var flength = f.length;
try {
  f.length();
} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}
if (f.length !== 5) {}