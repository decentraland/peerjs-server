import { IConfig } from "../../config";
import { IClient } from "../../models/client";
import { IRealm } from "../../models/realm";
declare type CustomConfig = Pick<IConfig, 'alive_timeout'>;
export declare class CheckBrokenConnections {
    readonly checkInterval: number;
    private timeoutId;
    private readonly realm;
    private readonly config;
    private readonly onClose?;
    constructor({ realm, config, checkInterval, onClose }: {
        realm: IRealm;
        config: CustomConfig;
        checkInterval?: number;
        onClose?: (client: IClient) => void;
    });
    start(): void;
    stop(): void;
    private checkConnections;
}
export {};
