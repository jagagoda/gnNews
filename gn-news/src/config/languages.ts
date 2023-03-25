import { Country } from "./countries";

type Language = Partial<Country>;

const languages: Array<Language> = ["pl", "us"];

export default languages;
export type { Language };
