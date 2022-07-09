"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
describe("message parser tests", function () {
    it("correctly formats message with tags", function () {
        var message = "Hello world this is me danny #tag1 #tag2";
        var parsed = (0, utils_1.parseMessage)(message);
        expect(parsed.title).toBe("Hello world thi...");
        expect(parsed.body).toBe("Hello world this is me danny");
        expect(parsed.tags).toStrictEqual(["tag1", "tag2"]);
    });
});
