import * as ns from './delete-exported-init.js';
export var local1 = 333;
var local2 = 444;
export {local2 as renamed};
export {local1 as indirect} from './delete-exported-init.js';