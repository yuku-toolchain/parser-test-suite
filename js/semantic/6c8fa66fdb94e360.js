if (Object.isExtensible(import.meta)) {
  import.meta.test262prop = "blubb";
  var proto = {};
  Object.setPrototypeOf(import.meta, proto);
}
Object.preventExtensions(import.meta);
Object.seal(import.meta);
Object.freeze(import.meta);