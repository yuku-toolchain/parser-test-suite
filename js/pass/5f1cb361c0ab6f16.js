function always(s) {
  return {
    "many": s,
    "few": s,
    "one": s
  };
}
const units = {
  "second": always("s"),
  "minute": always("min"),
  "hour": always("g."),
  "day": {
    "many": "dni",
    "few": "dni",
    "one": "dzień"
  },
  "week": {
    "many": "tyg.",
    "few": "tyg.",
    "one": "tydz."
  },
  "month": always("mies."),
  "quarter": always("kw."),
  "year": {
    "many": "lat",
    "few": "lata",
    "one": "rok"
  }
};
const rtf = new Intl.RelativeTimeFormat("pl-PL", {
  "style": "narrow"
});
for (const [unitArgument, expected] of Object.entries(units)) {}