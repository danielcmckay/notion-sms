import { NotionNote } from "../models";
import { parseMessage } from "../utils";

describe("message parser tests", () => {
  it("correctly formats message with tags", () => {
    const message = "Hello world this is me danny #tag1 #tag2";

    const parsed: NotionNote = parseMessage(message);

    expect(parsed.title).toBe("Hello world thi...");
    expect(parsed.body).toBe("Hello world this is me danny");
    expect(parsed.tags).toStrictEqual(["tag1", "tag2"]);
  });
});
