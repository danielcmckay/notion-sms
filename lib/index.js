"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
require("dotenv").config();
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
var twilio = require("twilio");
var client = new twilio(accountSid, authToken);
console.log(accountSid);
client.messages
    .create({
    body: "Hello from Node",
    to: "+16082125513",
    from: process.env.TWILIO_SMS_NUMBER, // From a valid Twilio number
})
    .then(function (message) { return console.log(message.sid); });
