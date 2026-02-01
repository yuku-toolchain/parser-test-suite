var __obj = {};
if (!Object.prototype.isPrototypeOf(__obj)) {}
var protoObj = {};
function FooObj() {}
var obj__ = new FooObj();
if (!Object.prototype.isPrototypeOf(obj__)) {}
if (!FooObj.prototype.isPrototypeOf(obj__)) {}
if (protoObj.isPrototypeOf(obj__)) {}
FooObj.prototype = protoObj;
if (protoObj.isPrototypeOf(obj__)) {}
var __foo = new FooObj();
if (!Object.prototype.isPrototypeOf(__foo)) {}
if (!FooObj.prototype.isPrototypeOf(__foo)) {}
if (!protoObj.isPrototypeOf(__foo)) {}