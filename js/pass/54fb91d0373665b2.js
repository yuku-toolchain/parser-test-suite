this.p1 = 1;
var myObj = {
  p1: 'a'
};
eval("with(myObj){p1='b'}");
if (myObj.p1 !== 'b') {}
if (myObj.p1 === 1) {}