import * as ns from './get-own-property-sym.js';
var notFound = Symbol('test262');
var desc;
desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
desc = Object.getOwnPropertyDescriptor(ns, notFound);