var str = 'ABC';
var strObj = new String('ABC');
if (str.constructor !== strObj.constructor) {}
if (str != strObj) {}
if (str === strObj) {}