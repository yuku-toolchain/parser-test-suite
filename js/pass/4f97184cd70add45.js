let defaultSensitivity = new Intl.Collator("en").resolvedOptions().sensitivity;
Object.prototype.sensitivity = "base";
let collator = new Intl.Collator("en");