"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(body) {
        var _this = this;
        this.arguments = function () { return _this.action.arguments.length; };
        this.description = body.description;
        this.usage = body.usage;
        this.action = body.action;
    }
    return Command;
}());
exports.Command = Command;
