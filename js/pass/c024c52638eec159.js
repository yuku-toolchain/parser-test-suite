var str = 'aaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa';
var result;
result = str.replaceAll('a', '$11');
result = str.replaceAll('a', '$29');
var customRE = /./g;
Object.defineProperty(customRE, Symbol.replace, {
  value: undefined
});
result = ('------------------- /./g -------/./g').replaceAll(customRE, 'a($12$11)');