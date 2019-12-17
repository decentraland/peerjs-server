import { MessageType } from "../enums";
import { IClient } from "../models/client";
import { IMessage } from "../models/message";
import { Handler } from "./handler";
export interface IHandlersRegistry {
    registerHandler(messageType: MessageType, handler: Handler): void;
    handle(client: IClient | undefined, message: IMessage): boolean;
}
export declare class HandlersRegistry implements IHandlersRegistry {
    private readonly handlers;
    registerHandler(messageType: MessageType, handler: Handler): void;
    handle(client: IClient | undefined, message: IMessage): boolean;
}
