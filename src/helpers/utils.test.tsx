import { decodeHtml } from "./decodeHtml";

describe("util tests", () => {
  it("decodes html strings properly", () => {
    const string = decodeHtml(
      "The first &quot;Metal Gear&quot; game was released for the PlayStation 1."
    );
    expect(string).toBe(
      'The first "Metal Gear" game was released for the PlayStation 1.'
    );
  });
});
