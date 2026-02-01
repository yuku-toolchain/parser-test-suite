var obj = 1;
var retobj = Function("this.touched= true; return this;").call(obj);