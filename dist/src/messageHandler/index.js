"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const handlers_1 = require("./handlers");
const handlersRegistry_1 = require("./handlersRegistry");
class MessageHandler {
    constructor(realm, config, handlersRegistry = new handlersRegistry_1.HandlersRegistry()) {
        this.handlersRegistry = handlersRegistry;
        const transmissionHandler = handlers_1.TransmissionHandler({ realm });
        const heartbeatHandler = handlers_1.HeartbeatHandler;
        const handleTransmission = (client, { type, src, dst, payload }) => {
            return transmissionHandler(client, {
                type,
                src,
                dst,
                payload,
            });
        };
        const handleHeartbeat = (client, message) => heartbeatHandler(client, message);
        const handleValidation = (client, message) => {
            config.authHandler(client, message).then(result => {
                var _a;
                const socket = (_a = client) === null || _a === void 0 ? void 0 : _a.getSocket();
                try {
                    if (socket) {
                        if (result) {
                            client.setAuthenticated(true);
                        }
                        const data = JSON.stringify({ type: result ? enums_1.MessageType.VALIDATION_OK : enums_1.MessageType.VALIDATION_NOK });
                        socket.send(data);
                        if (!result) {
                            socket.close();
                        }
                    }
                    else {
                        // Neither socket no res available. Peer dead?
                        throw new Error("Peer dead");
                    }
                }
                catch (e) {
                    // This happens when a peer disconnects without closing connections and
                    // the associated WebSocket has not closed.
                    // Tell other side to stop trying.
                    if (socket) {
                        socket.close();
                    }
                    else {
                        realm.removeClientById(client.getId());
                    }
                    this.handle(client, {
                        type: enums_1.MessageType.LEAVE,
                        src: client.getId(),
                        dst: client.getId()
                    });
                }
            });
            return true;
        };
        this.handlersRegistry.registerHandler(enums_1.MessageType.HEARTBEAT, handleHeartbeat);
        this.handlersRegistry.registerHandler(enums_1.MessageType.VALIDATION, handleValidation);
        this.handlersRegistry.registerHandler(enums_1.MessageType.OFFER, handleTransmission);
        this.handlersRegistry.registerHandler(enums_1.MessageType.ANSWER, handleTransmission);
        this.handlersRegistry.registerHandler(enums_1.MessageType.REJECT, handleTransmission);
        this.handlersRegistry.registerHandler(enums_1.MessageType.CANDIDATE, handleTransmission);
        this.handlersRegistry.registerHandler(enums_1.MessageType.LEAVE, handleTransmission);
        this.handlersRegistry.registerHandler(enums_1.MessageType.EXPIRE, handleTransmission);
    }
    handle(client, message) {
        return this.handlersRegistry.handle(client, message);
    }
}
exports.MessageHandler = MessageHandler;
