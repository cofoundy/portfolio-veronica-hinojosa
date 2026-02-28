import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export type Texts = typeof en;

const texts: Record<Lang, Texts> = { en, es };

export function getTexts(lang: Lang): Texts {
  return texts[lang];
}
