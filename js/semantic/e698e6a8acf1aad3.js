import * as ns from './set.js';
export var local1 = null;
var local2 = null;
export {local2 as renamed};
export {local1 as indirect} from './set.js';
var sym = Symbol('test262');