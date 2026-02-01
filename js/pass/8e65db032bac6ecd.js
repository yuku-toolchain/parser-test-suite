function FooObj() {}
FooObj.prototype.propFoo = "some";
var __obj = new FooObj();
if (__obj.propFoo !== "some") {}
if (__obj['propFoo'] !== "some") {}