var obj = true;
var retobj = new Function("this.touched= true; return this;").apply(obj);