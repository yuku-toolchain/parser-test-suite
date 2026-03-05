import * as ns from './delete-exported-uninit.js';
export let local1 = 23;
let local2 = 45;
export {local2 as renamed};
export {local1 as indirect} from './delete-exported-uninit.js';
export default null;