var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
async function* agDecl() {}
var agExpr = async function* () {};