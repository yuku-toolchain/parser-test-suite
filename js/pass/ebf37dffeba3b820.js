if (!true !== false) {}
if (!!true !== true) {}
var x = true;
if (!x !== false) {}
var x = true;
if (!!x !== true) {}
var object = new Object();
object.prop = true;
if (!object.prop !== false) {}