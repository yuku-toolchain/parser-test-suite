if (String.fromCharCode(Number.NaN).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(Number.NaN).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}
if (String.fromCharCode(Number("abc")).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(0).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}
if (String.fromCharCode(0).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(0).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}
if (String.fromCharCode(-0).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(-0).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}
if (String.fromCharCode(Number.POSITIVE_INFINITY).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(Number.POSITIVE_INFINITY).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}
if (String.fromCharCode(Number.NEGATIVE_INFINITY).charCodeAt(0) !== +0) {} else if (1 / String.fromCharCode(Number.NEGATIVE_INFINITY).charCodeAt(0) !== Number.POSITIVE_INFINITY) {}