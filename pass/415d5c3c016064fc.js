var p = "a,b,c";
try {
  var f = new Function(p, undefined);
} catch (e) {}