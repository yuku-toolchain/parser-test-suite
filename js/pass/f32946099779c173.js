var p1 = new Promise(function () {});
delete p1.constructor;
var p2 = p1.then();