this.p1 = 'a';
var myObj = {
  p1: true
};
eval("with(myObj){p1=false}");
if (myObj.p1 !== false) {}
if (myObj.p1 === 'a') {}