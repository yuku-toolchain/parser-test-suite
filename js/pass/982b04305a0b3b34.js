var superclass = $262.IsHTMLDDA;
var prototypeGets = 0;
Object.defineProperty(superclass, "prototype", {
  get: function () {
    prototypeGets += 1;
  }
});