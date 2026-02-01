var obj = new Number(1);
Function("this.touched= true;").apply(obj);