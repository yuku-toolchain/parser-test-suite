import * as ns from './get-str-initialize.js';
export let localUninit1 = 111;
let localUninit2 = 222;
export {localUninit2 as renamedUninit};
export {localUninit1 as indirectUninit} from './get-str-initialize.js';
export default 333;