try {
  var FACTORY = Function("this.p1=1").apply;
  var obj = new FACTORY();
} catch (e) {}