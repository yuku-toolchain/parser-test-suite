const neverEqual = new Temporal.ZonedDateTime(0n, 'Asia/Tokyo');
const zdt = new Temporal.ZonedDateTime(0n, 'America/Los_Angeles');
const ids = [['America/Atka', 'America/Adak'], ['America/Knox_IN', 'America/Indiana/Knox'], ['Asia/Ashkhabad', 'Asia/Ashgabat'], ['Asia/Dacca', 'Asia/Dhaka'], ['Asia/Istanbul', 'Europe/Istanbul'], ['Asia/Macao', 'Asia/Macau'], ['Asia/Thimbu', 'Asia/Thimphu'], ['Asia/Ujung_Pandang', 'Asia/Makassar'], ['Asia/Ulan_Bator', 'Asia/Ulaanbaatar']];
for (const [identifier, primaryIdentifier] of ids) {
  const z1 = zdt.withTimeZone(identifier);
  const z2 = zdt.withTimeZone(primaryIdentifier);
}