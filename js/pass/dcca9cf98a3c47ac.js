var objectProxy = new Proxy({
  length: 0,
  other: 0
}, {});
var arrayProxy = new Proxy([], {});
var arrayProxyProxy = new Proxy(arrayProxy, {});
var visitedOther, injectProxy;
arrayProxy.other = 0;
injectProxy = function (name, val) {
  if (name === 'other') {
    visitedOther = true;
  }
  this[1] = objectProxy;
  return val;
};
visitedOther = false;
JSON.parse('[null, null]', injectProxy);
injectProxy = function (name, val) {
  if (name === 'other') {
    visitedOther = true;
  }
  this[1] = arrayProxy;
  return val;
};
visitedOther = false;
JSON.parse('[null, null]', injectProxy);
injectProxy = function (name, val) {
  if (name === 'other') {
    visitedOther = true;
  }
  this[1] = arrayProxyProxy;
  return val;
};
visitedOther = false;
JSON.parse('[null, null]', injectProxy);