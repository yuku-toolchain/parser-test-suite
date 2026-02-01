delete String.prototype.toString;
if (String.prototype.toString() !== "[object " + "String" + "]") {}