const multipleEraTests = [["gregory", [-100, 2025]], ["japanese", [-100, 1850, 1880, 1920, 1930, 1990, 2025]], ["roc", [1900, 2025]]];
for (const [calendar, isoYears] of multipleEraTests) {
  const formatter = new Intl.DateTimeFormat("en", {
    calendar,
    era: "long",
    year: "numeric"
  });
  const eras = [];
  for (const isoYear of isoYears) {
    const date = new Date(isoYear, 5, 15);
    const parts = formatter.formatToParts(date);
    const eraPart = parts.find(({type}) => type === "era");
    eras.push(eraPart.value);
    const format = formatter.format(date);
    const yearPart = parts.find(({type}) => type === "year");
  }
}
const singleEraTests = [["buddhist", [-600, 2025]], ["ethioaa", [-5550, 2025]], ["hebrew", [-3800, 2025]], ["indian", [70, 2025]], ["persian", [600, 2025]]];
for (const [calendar, isoYears] of singleEraTests) {
  const formatter = new Intl.DateTimeFormat("en", {
    calendar,
    era: "long",
    year: "numeric"
  });
  const eras = [];
  for (const isoYear of isoYears) {
    const date = new Date(isoYear, 5, 15);
    const parts = formatter.formatToParts(date);
    const eraPart = parts.find(({type}) => type === "era");
    eras.push(eraPart.value);
    const format = formatter.format(date);
    const yearPart = parts.find(({type}) => type === "year");
  }
}
const noEraTests = ["chinese", "dangi"];
for (const calendar of noEraTests) {
  const formatter = new Intl.DateTimeFormat("en", {
    calendar,
    era: "long",
    year: "numeric"
  });
  const date = new Date(2025, 5, 15);
  const parts = formatter.formatToParts(date);
  const eraPart = parts.find(({type}) => type === "era");
}