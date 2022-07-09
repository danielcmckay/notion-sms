"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
("dotenv/config"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
require("dotenv").config();
(0, server_1.runServer)();
