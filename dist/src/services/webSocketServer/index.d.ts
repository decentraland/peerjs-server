/// <reference types="node" />
import EventEmitter from "events";
import WebSocketLib from "ws";
import { IConfig } from "../../config";
import { IRealm } from "../../models/realm";
export interface IWebSocketServer extends EventEmitter {
    readonly path: string;
}
declare type CustomConfig = Pick<IConfig, 'path' | 'key' | 'concurrent_limit'>;
export declare class WebSocketServer extends EventEmitter implements IWebSocketServer {
    readonly path: string;
    private readonly realm;
    private readonly config;
    readonly socketServer: WebSocketLib.Server;
    constructor({ server, realm, config }: {
        server: any;
        realm: IRealm;
        config: CustomConfig;
    });
    private _onSocketConnection;
    private _onSocketError;
    private _registerClient;
    private _configureWS;
    private _sendErrorAndClose;
}
export {};
