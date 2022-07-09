import { NotionNote } from "./models";
const { Client } = require("@notionhq/client");
("dotenv/config");
require("dotenv").config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function writeToPage({ title, body, tags }: NotionNote) {
  const writeResponse = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_TARGET_DB,
    },
    properties: {
      Note: {
        title: [{ text: { content: title } }],
      },
      Tags: {
        multi_select: tags.map((t) => ({ name: t })),
      },
    },
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body,
              },
            },
          ],
        },
      },
    ],
  });

  return writeResponse;
}
