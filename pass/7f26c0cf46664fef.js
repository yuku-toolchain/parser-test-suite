const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, "caseFirst");
if (propdesc !== undefined) {
  const getter = propdesc.get;
}