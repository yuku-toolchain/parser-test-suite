var noSpecies = function () {};
var re = /[db]/;
var result;
re.constructor = noSpecies;
noSpecies[Symbol.species] = undefined;
result = re[Symbol.split]('abcde');
noSpecies[Symbol.species] = null;
result = re[Symbol.split]('abcde');