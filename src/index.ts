import { capitalize } from "@lucid-softworks/string-capitalize";
import { stringWords } from "@lucid-softworks/string-words";

/** Convert text to Pascal case. */
export function pascalCase(value: string): string {
  return stringWords(value)
    .map((word) => capitalize(word.toLowerCase()))
    .join("");
}
