import fs from "fs/promises";
import { afterAll, beforeAll, expect, test, vi, describe } from "vitest";

beforeAll(() => {
  vi.spyOn(console, "log");
});

afterAll(() => {
  vi.resetAllMocks();
});

describe("Exercise 3: Equality of value tests cases", () => {
  test("ผลลัพธ์จากการ Execute ตัว Function isPlainObject ต้องแสดงออกมาเป็น true false false", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data}`;

    const func = new Function(code);
    func();

    expect(console.log.mock.calls[0][0]).toEqual(true);
    expect(console.log.mock.calls[1][0]).toEqual(false);
    expect(console.log.mock.calls[2][0]).toEqual(false);
  });
});
