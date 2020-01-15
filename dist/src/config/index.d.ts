import { IClient } from '../models/client';
import { IMessage } from '../models/message';
export interface IConfig {
    readonly port: number;
    readonly expire_timeout: number;
    readonly alive_timeout: number;
    readonly key: string;
    readonly path: string;
    readonly concurrent_limit: number;
    readonly allow_discovery: boolean;
    readonly proxied: boolean | string;
    readonly cleanup_out_msgs: number;
    readonly ssl?: {
        key: string;
        cert: string;
    };
    readonly authHandler: (client: IClient | undefined, message: IMessage) => Promise<boolean>;
}
declare const defaultConfig: IConfig;
export default defaultConfig;
