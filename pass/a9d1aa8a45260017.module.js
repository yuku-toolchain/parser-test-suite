var x = 'synchronous evaluation';
Promise.resolve().then(() => x = 'tick in the async evaluation');
import self from './module-self-import-async-resolution-ticks.js';
export default await Promise.resolve(42);