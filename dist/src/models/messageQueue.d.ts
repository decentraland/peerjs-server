import { IMessage } from "./message";
export interface IMessageQueue {
    getLastReadAt(): number;
    addMessage(message: IMessage): void;
    readMessage(): IMessage | undefined;
    getMessages(): IMessage[];
}
export declare class MessageQueue implements IMessageQueue {
    private lastReadAt;
    private readonly messages;
    getLastReadAt(): number;
    addMessage(message: IMessage): void;
    readMessage(): IMessage | undefined;
    getMessages(): IMessage[];
}
