try {
  var FACTORY = Function("this.p1=1").call;
  var obj = new FACTORY();
} catch (e) {}