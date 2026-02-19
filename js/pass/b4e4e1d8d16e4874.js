var str = 'aaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa';
var result;
result = str.replaceAll('a', '$<');
var customRE = /./g;
Object.defineProperty(customRE, Symbol.replace, {
  value: undefined
});
result = ('------------------- /./g -------/./g').replaceAll(customRE, 'a($<$<)');