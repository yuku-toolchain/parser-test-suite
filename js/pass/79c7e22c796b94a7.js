this.p1 = 'a';
var myObj = {
  p1: 1
};
eval("with(myObj){p1=2}");
if (myObj.p1 !== 2) {}
if (myObj.p1 === 'a') {}