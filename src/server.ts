import express = require("express");
import { parseMessage } from "./utils";
import { writeToPage } from "./notion";
import { sendMessage } from "./twilio";

export function runServer() {
  const app = express();
  const PORT = process.env.PORT;

  app.get("/sms", async (req: express.Request) => {
    console.log("Received message: " + req.query.Body);

    try {
      const noteEntry = parseMessage(req.query.Body as string);

      const writeResponse = await writeToPage(noteEntry);
      sendMessage(
        `New note created at ${writeResponse.url}`,
        req.query.From as string
      );
    } catch (err) {
      console.log("oops");

      console.log(err);

      sendMessage("Encountered an error!", req.query.From as string);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
