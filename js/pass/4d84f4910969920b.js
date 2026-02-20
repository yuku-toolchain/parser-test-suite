var re1 = new RegExp("b{" + Number.MAX_SAFE_INTEGER + "}", "u");
var re2 = new RegExp("b{" + Number.MAX_SAFE_INTEGER + ",}?");
var re3 = new RegExp("b{" + Number.MAX_SAFE_INTEGER + "," + Number.MAX_SAFE_INTEGER + "}");