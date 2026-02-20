if (!Object.prototype.isPrototypeOf(String.prototype)) {}
delete String.prototype.toString;
if (String.prototype.toString() != "[object " + "String" + "]") {}