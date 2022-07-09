"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMessage = void 0;
function parseMessage(message) {
    if (message === " ") {
        throw new Error("Cannot parse empty text");
    }
    var body = message.includes("#")
        ? message.substring(0, message.indexOf("#")).trim()
        : message;
    var tags = message.includes("#")
        ? message
            .substring(message.indexOf("#"))
            .split("#")
            .filter(function (i) { return i !== ""; })
            .map(function (i) { return i.trim(); })
        : [];
    return {
        title: body.substring(0, 15).concat("..."),
        body: body,
        tags: tags,
    };
}
exports.parseMessage = parseMessage;
