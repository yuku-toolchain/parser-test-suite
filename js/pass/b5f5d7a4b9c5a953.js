let optionKeys = Object.keys(new Intl.DurationFormat().resolvedOptions());
let opt = {};
let readKeys = new Array();
optionKeys.forEach(property => Object.defineProperty(opt, property, {
  get() {
    readKeys[readKeys.length] = property;
    return undefined;
  }
}));
let p = new Intl.DurationFormat(undefined, opt);