class SubPromise extends Promise {}
var instance = Promise.withResolvers.call(SubPromise);