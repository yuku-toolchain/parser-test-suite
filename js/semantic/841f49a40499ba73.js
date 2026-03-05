import * as ns from './get-str-found-uninit.js';
export let local1 = 23;
let local2 = 45;
export {local2 as renamed};
export {local1 as indirect} from './get-str-found-uninit.js';
export default null;