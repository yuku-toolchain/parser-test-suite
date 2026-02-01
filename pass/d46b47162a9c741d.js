function regular(s) {
  return {
    "many": s,
    "few": s + "y",
    "one": s + "ę"
  };
}
const units = {
  "second": regular("sekund"),
  "minute": regular("minut"),
  "hour": regular("godzin"),
  "day": {
    "many": "dni",
    "few": "dni",
    "one": "dzień"
  },
  "week": {
    "many": "tygodni",
    "few": "tygodnie",
    "one": "tydzień"
  },
  "month": {
    1000: "miesięcy",
    "many": "miesięcy",
    "few": "miesiące",
    "one": "miesiąc"
  },
  "quarter": {
    "many": "kwartałów",
    "few": "kwartały",
    "one": "kwartał"
  },
  "year": {
    "many": "lat",
    "few": "lata",
    "one": "rok"
  }
};
const rtf = new Intl.RelativeTimeFormat("pl-PL", {
  "style": "long"
});
for (const [unitArgument, expected] of Object.entries(units)) {}