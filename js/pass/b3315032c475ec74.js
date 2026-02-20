var revocationFunction = Proxy.revocable({}, {}).revoke;
var propNames = Object.getOwnPropertyNames(revocationFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");