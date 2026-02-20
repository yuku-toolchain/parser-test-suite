try {
  var obj = new (Function("function f(){this.p1=1;};return f").call())();
} catch (e) {}