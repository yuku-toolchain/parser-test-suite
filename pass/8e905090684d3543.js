var MyFunction = new Function("return this");
if (MyFunction() !== this) {}
MyFunction = new Function("return eval(\'this\')");
if (MyFunction() !== this) {}