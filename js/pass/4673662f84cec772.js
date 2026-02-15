function formatPropertyName(propertyKey, objectName = "") {
  switch (typeof propertyKey) {
    case "symbol":
      if (Symbol.keyFor(propertyKey) !== undefined) {
        return `${objectName}[Symbol.for('${Symbol.keyFor(propertyKey)}')]`;
      } else if (propertyKey.description.startsWith('Symbol.')) {
        return `${objectName}[${propertyKey.description}]`;
      } else {
        return `${objectName}[Symbol('${propertyKey.description}')]`;
      }
    case "string":
      if (propertyKey !== String(Number(propertyKey))) return objectName ? `${objectName}.${propertyKey}` : propertyKey;
    default:
      return `${objectName}[${propertyKey}]`;
  }
}