"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors;
(function (Errors) {
    Errors["INVALID_KEY"] = "Invalid key provided";
    Errors["INVALID_TOKEN"] = "Invalid token provided";
    Errors["INVALID_WS_PARAMETERS"] = "No token, or key supplied to websocket server";
    Errors["CONNECTION_LIMIT_EXCEED"] = "Server has reached its concurrent user limit";
    Errors["NO_AVAILABLE_ID_FOUND"] = "No available id has been found";
})(Errors = exports.Errors || (exports.Errors = {}));
var MessageType;
(function (MessageType) {
    MessageType["OPEN"] = "OPEN";
    MessageType["LEAVE"] = "LEAVE";
    MessageType["CANDIDATE"] = "CANDIDATE";
    MessageType["OFFER"] = "OFFER";
    MessageType["ANSWER"] = "ANSWER";
    MessageType["REJECT"] = "REJECT";
    MessageType["EXPIRE"] = "EXPIRE";
    MessageType["HEARTBEAT"] = "HEARTBEAT";
    MessageType["ID_TAKEN"] = "ID-TAKEN";
    MessageType["ERROR"] = "ERROR";
    MessageType["VALIDATION"] = "VALIDATION";
    MessageType["VALIDATION_OK"] = "VALIDATION_OK";
    MessageType["VALIDATION_NOK"] = "VALIDATION_NOK";
    MessageType["ASSIGNED_ID"] = "ASSIGNED_ID";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var IdType;
(function (IdType) {
    IdType["SELF_ASSIGNED"] = "SELF_ASSIGNED";
    IdType["SERVER_ASSIGNED"] = "SERVER_ASSIGNED";
})(IdType = exports.IdType || (exports.IdType = {}));
