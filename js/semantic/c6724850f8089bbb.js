var x = 'synchronous evaluation';
Promise.resolve().then(() => x = 'tick in the async evaluation');
import foo from './module-import-resolution_FIXTURE.js';
Promise.resolve().then(() => {}).then($DONE, $DONE);