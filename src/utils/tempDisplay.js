export function tempDisplay(tempKelvin) {
  const tempFahrenheit = ((tempKelvin - 273.15) * 9) / 5 + 32;

  return `${Math.round(tempFahrenheit)}°F`;
}
