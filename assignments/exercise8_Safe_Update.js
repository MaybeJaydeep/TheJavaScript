const settings = { theme: "light", notifications: true };

const newSettings = {
  ...settings,
  theme: "dark"
};

console.log(settings.theme);     // light
console.log(newSettings.theme);  // dark