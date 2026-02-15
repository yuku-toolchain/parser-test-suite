this.p1 = 'a';
var myObj = {
  p1: [1, 2, 3]
};
eval("with(myObj){p1=[3,2,1]}");
if (myObj.p1[2] !== 1) {}
if (myObj.p1 === 'a') {}