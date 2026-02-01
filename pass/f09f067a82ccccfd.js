function FooObj() {}
FooObj.prototype.prop = "some";
var foo = new FooObj();
if (foo.prop !== "some") {}
foo.prop = true;
var foo__ = new FooObj();
if (foo__.prop !== "some") {}