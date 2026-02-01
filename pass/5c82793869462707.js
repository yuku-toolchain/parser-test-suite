this.p1 = 'a';
var myObj = {
  p1: [1, 2, 3],
  del: false
};
eval("with(myObj){del = delete p1}");
try {
  if (myObj.p1[2] === 3) {}
} catch (e) {
  var x = 1;
}
if (x !== 1) {}
if (myObj.p1 !== undefined) {}
if (myObj.del !== true) {}
if (myObj.p1 === 'a') {}