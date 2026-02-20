const originalPromise = Promise;
fnGlobalObject().Promise = function () {
  throw "This should not be called";
};
const p = import('./dynamic-import-module_FIXTURE.js');