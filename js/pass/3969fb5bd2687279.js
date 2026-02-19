var date = new Date(0);
if (date + date !== date.toString() + date.toString()) {}
var date = new Date(0);
if (date + 0 !== date.toString() + "0") {}
var date = new Date(0);
if (date + true !== date.toString() + "true") {}
var date = new Date(0);
if (date + new Object() !== date.toString() + "[object Object]") {}