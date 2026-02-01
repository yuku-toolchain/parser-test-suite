var __str__obj = new String("seamaid");
__str__obj.toString = Object.prototype.toString;
if (__str__obj.toString() !== "[object " + "String" + "]") {}