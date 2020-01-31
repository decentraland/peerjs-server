"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor({ id, token, msg }) {
        this.socket = null;
        this.lastPing = new Date().getTime();
        this.authenticated = false;
        this.id = id;
        this.token = token;
        this.msg = msg;
    }
    getId() {
        return this.id;
    }
    getToken() {
        return this.token;
    }
    getMsg() {
        return this.msg;
    }
    getSocket() {
        return this.socket;
    }
    setSocket(socket) {
        this.socket = socket;
    }
    getLastPing() {
        return this.lastPing;
    }
    setLastPing(lastPing) {
        this.lastPing = lastPing;
    }
    send(data) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(data));
    }
    isAuthenticated() {
        return this.authenticated;
    }
    setAuthenticated(authenticated) {
        this.authenticated = authenticated;
    }
}
exports.Client = Client;
