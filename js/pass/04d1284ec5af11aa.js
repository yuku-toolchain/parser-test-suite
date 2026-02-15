function* G() {}
var iter, result;
iter = G();
iter.next();
result = iter.return(33);
result = iter.next();