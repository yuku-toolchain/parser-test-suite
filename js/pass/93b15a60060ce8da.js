const numberingSystems = Intl.supportedValuesOf("numberingSystem");
for (const numberingSystem of numberingSystems) {
  const obj = new Intl.DurationFormat("en", {
    numberingSystem
  });
}