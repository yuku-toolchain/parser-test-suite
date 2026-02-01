var x;
var target = [1, 2, 3];
var p = new Proxy(target, {
  enumerate: function () {}
});
var forInResults = [];
for (x in p) {
  forInResults.push(x);
}
var forOfResults = [];
for (x of p) {
  forOfResults.push(x);
}
var itor = p[Symbol.iterator]();
var next = itor.next();
next = itor.next();
next = itor.next();
next = itor.next();