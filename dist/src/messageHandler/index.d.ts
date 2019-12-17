import { IClient } from "../models/client";
import { IMessage } from "../models/message";
import { IRealm } from "../models/realm";
import { IHandlersRegistry } from "./handlersRegistry";
export interface IMessageHandler {
    handle(client: IClient | undefined, message: IMessage): boolean;
}
export declare class MessageHandler implements IMessageHandler {
    private readonly handlersRegistry;
    constructor(realm: IRealm, handlersRegistry?: IHandlersRegistry);
    handle(client: IClient | undefined, message: IMessage): boolean;
}
