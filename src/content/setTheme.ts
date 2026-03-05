/**
 * Customization guide:
 * - You can customize: selectedTheme value.
 * - Do not customize: export names (ThemeType, selectedTheme). Keep selectedTheme within ThemeType.
 * - How: set selectedTheme to one of the listed DaisyUI theme names.
 */
export type ThemeType =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "cmyk"
  | "autumn"
  | "business"
  | "acid"
  | "lemonade"
  | "night"
  | "coffee"
  | "winter"
  | "dim"
  | "nord"
  | "sunset"
  | "caramellatte"
  | "abyss"
  | "silk";

export const selectedTheme: ThemeType | "" = "caramellatte";
