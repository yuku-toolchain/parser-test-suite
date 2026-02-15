var dateObj = new Date(0);
var preCheck = Object.isExtensible(dateObj);
Object.seal(dateObj);