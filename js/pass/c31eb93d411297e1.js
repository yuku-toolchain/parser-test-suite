var obj = Function();
new Function("this.touched= true; return this;").call(obj);