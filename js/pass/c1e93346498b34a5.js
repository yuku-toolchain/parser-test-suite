this.p1 = 'a';
var myObj = {
  p1: 1,
  del: false
};
eval("with(myObj){del = delete p1}");
if (myObj.p1 === 1) {}
if (myObj.p1 !== undefined) {}
if (myObj.del !== true) {}
if (myObj.p1 === 'a') {}