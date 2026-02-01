this.p1 = 'a';
var myObj = {
  p1: {
    a: "hello"
  }
};
eval("with(myObj){p1={b:'hi'}}");
if (myObj.p1.a === "hello") {}
if (myObj.p1.b !== "hi") {}
if (myObj.p1 === 'a') {}