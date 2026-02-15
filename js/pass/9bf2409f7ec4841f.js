let continueExecution;
globalThis.promise = new Promise(resolve => continueExecution = resolve);
const executionStartPromise = new Promise(resolve => globalThis.executionStarted = resolve);