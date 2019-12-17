import { IConfig } from "../../config";
import { IMessageHandler } from "../../messageHandler";
import { IRealm } from "../../models/realm";
export interface IMessagesExpire {
    startMessagesExpiration(): void;
    stopMessagesExpiration(): void;
}
declare type CustomConfig = Pick<IConfig, 'cleanup_out_msgs' | 'expire_timeout'>;
export declare class MessagesExpire implements IMessagesExpire {
    private readonly realm;
    private readonly config;
    private readonly messageHandler;
    private timeoutId;
    constructor({ realm, config, messageHandler }: {
        realm: IRealm;
        config: CustomConfig;
        messageHandler: IMessageHandler;
    });
    startMessagesExpiration(): void;
    stopMessagesExpiration(): void;
    private pruneOutstanding;
}
export {};
