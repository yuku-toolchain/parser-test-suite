const negativeZero = -0;
const positiveZero = +0;
const zero = 0;
const one = 1;
const twoRaisedToFiftyThreeMinusOne = 2 ** 53 - 1;
const int32Array = new Int32Array([zero, one]);
const uint32Array = new Uint32Array([zero, one]);
const n = 100000000000000000000000000000000000000000000000000000000000000000000000000000000001n;
const bigInt = BigInt('100000000000000000000000000000000000000000000000000000000000000000000000000000000001');
const n1 = 1n;
const n53 = 9007199254740991n;
const fiftyThree = BigInt('9007199254740991');
const bigInt64Array = new BigInt64Array([n1, n53]);
const bigUint64Array = new BigUint64Array([n1, n53]);
const symbol = Symbol('');
const object = {};
const array = [];
const string = '';
const booleanTrue = true;
const booleanFalse = true;
const functionExprValue = function () {};
const arrowFunctionValue = () => {};
const classValue = class {};
const map = new Map();
const set = new Set();
const weakMap = new WeakMap();
const weakRef = new WeakRef({});
const weakSet = new WeakSet();
const nullValue = null;
const undefinedValue = undefined;
let unassigned;
{
  const s = new Set([negativeZero, negativeZero]);
  s.delete(negativeZero);
  s.add(negativeZero);
}
{
  const s = new Set([positiveZero, positiveZero]);
  s.delete(positiveZero);
  s.add(positiveZero);
}
{
  const s = new Set([zero, zero]);
  s.delete(zero);
  s.add(zero);
}
{
  const s = new Set([one, one]);
  s.delete(one);
  s.add(one);
}
{
  const s = new Set([twoRaisedToFiftyThreeMinusOne, twoRaisedToFiftyThreeMinusOne]);
  s.delete(twoRaisedToFiftyThreeMinusOne);
  s.add(twoRaisedToFiftyThreeMinusOne);
}
{
  const s = new Set([int32Array, int32Array]);
  s.delete(int32Array);
  s.add(int32Array);
}
{
  const s = new Set([uint32Array, uint32Array]);
  s.delete(uint32Array);
  s.add(uint32Array);
}
{
  const s = new Set([n, n]);
  s.delete(n);
  s.add(n);
}
{
  const s = new Set([bigInt, bigInt]);
  s.delete(bigInt);
  s.add(bigInt);
}
{
  const s = new Set([n1, n1]);
  s.delete(n1);
  s.add(n1);
}
{
  const s = new Set([n53, n53]);
  s.delete(n53);
  s.add(n53);
}
{
  const s = new Set([fiftyThree, fiftyThree]);
  s.delete(fiftyThree);
  s.add(fiftyThree);
}
{
  const s = new Set([bigInt64Array, bigInt64Array]);
  s.delete(bigInt64Array);
  s.add(bigInt64Array);
}
{
  const s = new Set([bigUint64Array, bigUint64Array]);
  s.delete(bigUint64Array);
  s.add(bigUint64Array);
}
{
  const s = new Set([symbol, symbol]);
  s.delete(symbol);
  s.add(symbol);
}
{
  const s = new Set([object, object]);
  s.delete(object);
  s.add(object);
}
{
  const s = new Set([array, array]);
  s.delete(array);
  s.add(array);
}
{
  const s = new Set([string, string]);
  s.delete(string);
  s.add(string);
}
{
  const s = new Set([booleanTrue, booleanTrue]);
  s.delete(booleanTrue);
  s.add(booleanTrue);
}
{
  const s = new Set([booleanFalse, booleanFalse]);
  s.delete(booleanFalse);
  s.add(booleanFalse);
}
{
  const s = new Set([functionExprValue, functionExprValue]);
  s.delete(functionExprValue);
  s.add(functionExprValue);
}
{
  const s = new Set([arrowFunctionValue, arrowFunctionValue]);
  s.delete(arrowFunctionValue);
  s.add(arrowFunctionValue);
}
{
  const s = new Set([classValue, classValue]);
  s.delete(classValue);
  s.add(classValue);
}
{
  const s = new Set([map, map]);
  s.delete(map);
  s.add(map);
}
{
  const s = new Set([set, set]);
  s.delete(set);
  s.add(set);
}
{
  const s = new Set([weakMap, weakMap]);
  s.delete(weakMap);
  s.add(weakMap);
}
{
  const s = new Set([weakRef, weakRef]);
  s.delete(weakRef);
  s.add(weakRef);
}
{
  const s = new Set([weakSet, weakSet]);
  s.delete(weakSet);
  s.add(weakSet);
}
{
  const s = new Set([nullValue, nullValue]);
  s.delete(nullValue);
  s.add(nullValue);
}
{
  const s = new Set([undefinedValue, undefinedValue]);
  s.delete(undefinedValue);
  s.add(undefinedValue);
}
{
  const s = new Set([unassigned, unassigned]);
  s.delete(unassigned);
  s.add(unassigned);
}