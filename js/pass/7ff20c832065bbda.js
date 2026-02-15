if (eval.hasOwnProperty('length') !== true) {}
delete eval.length;
if (eval.hasOwnProperty('length') !== false) {}
if (eval.length === undefined) {}