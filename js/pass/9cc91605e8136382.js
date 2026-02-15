const calendarsWithEras = ["buddhist", "coptic", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic-civil", "islamic-tbla", "islamic-umalqura", "japanese", "persian", "roc"];
const calendarsWithoutEras = ["chinese", "dangi"];
calendarsWithEras.forEach(calendar => {});
calendarsWithoutEras.forEach(calendar => {
  const result = Temporal.PlainDate.from({
    year: 2025,
    month: 1,
    day: 1,
    era: "xyz",
    eraYear: 2025,
    calendar
  });
});