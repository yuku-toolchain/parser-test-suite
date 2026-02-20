this.p1 = 'a';
var myObj = {
  p1: function () {
    return 0;
  }
};
eval("with(myObj){p1=function(){return 1;}}");
if (myObj.p1() !== 1) {}
if (myObj.p1 === 'a') {}