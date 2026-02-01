const glob = new Bun.Glob("pass/**/*");

console.log(Array.from(glob.scanSync(".")).length)

// for (let file of glob.scanSync(".")) {
//   const contents = await Bun.file(file).text()
//   await Bun.write(`js/pass/${file.replace("pass/", "")}`, contents)
// }
