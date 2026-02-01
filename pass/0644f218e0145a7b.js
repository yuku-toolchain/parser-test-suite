var object = {};
object["true"] = 1;
if ((true in object) !== ("true" in object)) {}
var object = {};
object.Infinity = 1;
if ((Infinity in object) !== ("Infinity" in object)) {}
var object = {};
object.undefined = 1;
if ((undefined in object) !== ("undefined" in object)) {}
var object = {};
object["null"] = 1;
if ((null in object) !== ("null" in object)) {}