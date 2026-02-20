this.p1 = 1;
var myObj = {
  p1: 'a',
  del: false
};
eval("with(myObj){del = delete p1}");
if (myObj.p1 === 'a') {}
if (myObj.p1 !== undefined) {}
if (myObj.del !== true) {}
if (myObj.p1 === 1) {}