import { NotionNote } from "./models";

export function parseMessage(message: string): NotionNote {
  if (message === " ") {
    throw new Error("Cannot parse empty text");
  }
  const body = message.includes("#")
    ? message.substring(0, message.indexOf("#")).trim()
    : message;

  const tags = message.includes("#")
    ? message
        .substring(message.indexOf("#"))
        .split("#")
        .filter((i) => i !== "")
        .map((i) => i.trim())
    : [];

  return {
    title: body.substring(0, 15).concat("..."),
    body: body,
    tags: tags,
  };
}
