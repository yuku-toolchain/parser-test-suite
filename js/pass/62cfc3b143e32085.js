var FAKEFACTORY;
FAKEFACTORY = Function();
var fakeinstance;
fakeinstance = {};
if (fakeinstance instanceof FAKEFACTORY) {}
FAKEFACTORY.prototype = Object.prototype;
if (!(fakeinstance instanceof FAKEFACTORY)) {}