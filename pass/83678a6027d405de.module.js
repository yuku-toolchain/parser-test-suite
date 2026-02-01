import * as ns from './define-own-property.js';
export var local1;
var local2;
export {local2 as renamed};
export {local1 as indirect} from './define-own-property.js';
var sym = Symbol('test262');
const exported = ['local1', 'renamed', 'indirect'];
for (const key of ['local2', 0, sym, Symbol.iterator]) {}
for (const key of [...exported, Symbol.toStringTag]) {}
for (const key of [...exported, Symbol.toStringTag]) {}
for (let i = 1; i < exported.length + 2; i++) {}
for (const key of exported) {
  const desc = Object.getOwnPropertyDescriptor(ns, key);
}