var obj = new Object();
var ref = obj;
delete ref;
if (typeof obj !== 'object') {}