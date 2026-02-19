const invalidCaseFirstOptions = ["", "u", "Upper", "upper\0", "uppercase", "true", {
  valueOf() {
    return false;
  }
}];
for (const caseFirst of invalidCaseFirstOptions) {}