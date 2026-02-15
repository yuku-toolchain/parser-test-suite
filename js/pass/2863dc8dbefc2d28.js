function assertImportSourceResolutionFailure(specifier) {
  return import(specifier).then(() => {}, error => {
    if (error instanceof SyntaxError) {}
  });
}