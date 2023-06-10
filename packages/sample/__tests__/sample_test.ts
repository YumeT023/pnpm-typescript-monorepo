import {assert, describe, it} from "vitest";
import {sampleFunction} from "../src";

describe("Sample", () => {
  it("Returns sample object", () => {
    assert.deepEqual(sampleFunction(), {
      name: "sampleFunction",
    });
  });
});
