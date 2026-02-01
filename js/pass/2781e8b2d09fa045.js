if (~0 !== -1) {}
if (~~0 !== 0) {}
var x = 0;
if (~x !== -1) {}
var x = 0;
if (~~x !== 0) {}
var object = new Object();
object.prop = 0;
if (~object.prop !== -1) {}