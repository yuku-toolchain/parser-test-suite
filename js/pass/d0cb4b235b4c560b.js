try {
  var obj = new (Function("this.p1=1").apply)();
} catch (e) {}