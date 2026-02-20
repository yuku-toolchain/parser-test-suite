var result;
var searchValue;
searchValue = /./g;
Object.defineProperty(searchValue, Symbol.replace, {
  value: undefined
});
result = ('aa /./g /./g aa').replaceAll(searchValue, 'z');
searchValue = /./gy;
Object.defineProperty(searchValue, Symbol.replace, {
  value: undefined
});
result = ('aa /./gy /./gy aa').replaceAll(searchValue, 'z');
searchValue = /./gi;
Object.defineProperty(searchValue, Symbol.replace, {
  value: undefined
});
result = ('aa /./gi /./gi aa').replaceAll(searchValue, 'z');
searchValue = /./iyg;
Object.defineProperty(searchValue, Symbol.replace, {
  value: undefined
});
result = ('aa /./giy /./iyg /./gyi /./giy aa').replaceAll(searchValue, 'z');