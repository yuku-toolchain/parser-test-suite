var str = "";
var strObj = new String("");
var strObj_ = new String();
if (str.constructor !== strObj.constructor) {}
if (str.constructor !== strObj_.constructor) {}
if (str != strObj) {}
if (str === strObj) {}
if (str != strObj_) {}
if (str === strObj_) {}