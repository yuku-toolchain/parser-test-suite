const valid = [["Europe/Vienna"], ["America/New_York"], ["Africa/CAIRO", "Africa/Cairo"], ["africa/cairo", "Africa/Cairo"], ["Asia/Ulaanbaatar"], ["Asia/Ulan_Bator"], ["UTC"], ["GMT"]];
for (const [zone, id = zone] of valid) {
  const result = new Temporal.ZonedDateTime(0n, zone);
}
const invalid = ["+00:01.1", "-01.1"];
for (const zone of invalid) {}