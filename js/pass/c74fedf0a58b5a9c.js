var AsyncFunction = (async function foo() {}).constructor;
var fn;
fn = AsyncFunction("a", "await 1;");
fn = AsyncFunction("a,b", "await 1;");
fn = AsyncFunction("a", "b", "await 1;");
fn = new AsyncFunction("a", "await 1;");
fn = new AsyncFunction("a,b", "await 1;");
fn = new AsyncFunction("a", "b", "await 1;");