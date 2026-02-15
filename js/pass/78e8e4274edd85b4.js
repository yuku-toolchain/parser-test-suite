const formatter = new Intl.DateTimeFormat(["en"], {
  era: "narrow"
});
function checkEra(parts) {
  for (let part of parts) {
    if (part.type === 'era' && part.value.startsWith('A')) return true;
  }
  return false;
}