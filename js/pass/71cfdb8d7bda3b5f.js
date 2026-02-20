const AsyncFunction = (async function () {}).constructor;
const GeneratorFunction = (function* () {}).constructor;
const AsyncGeneratorFunction = (async function* () {}).constructor;
for (const ctor of [Function, AsyncFunction, GeneratorFunction, AsyncGeneratorFunction]) {}