var beforeCount = 0;
var afterCount = 0;
var iter = (function* () {
  (beforeCount += 1, import(''), afterCount += 1);
})();
iter.next();
var result = iter.return(595);