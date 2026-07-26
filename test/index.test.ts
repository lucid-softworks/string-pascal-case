import { describe, expect, it } from "vitest";

import { pascalCase } from "../src/index.js";

describe("pascalCase", () => {
  it.each([
    ["hello world", "HelloWorld"],
    ["HTTP_server-response", "HttpServerResponse"],
    ["version 42", "Version42"],
    ["", ""],
  ])("converts %j", (value, expected) => {
    expect(pascalCase(value)).toBe(expected);
  });
});
