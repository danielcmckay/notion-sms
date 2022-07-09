import "dotenv/config";
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

export function sendMessage(body: string, destination: string) {
  client.messages
    .create({
      body: body,
      to: destination,
      from: process.env.TWILIO_SMS_NUMBER,
    })
    .then((message: any) => console.log(message.sid))
    .catch((err: any) => console.log(err));
}
