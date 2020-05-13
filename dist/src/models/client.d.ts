import { MyWebSocket } from "../services/webSocketServer/webSocket";
import { IdType } from "../enums";
export interface IClient {
    getId(): string;
    getToken(): string;
    getMsg(): string;
    getSocket(): MyWebSocket | null;
    setSocket(socket: MyWebSocket | null): void;
    getLastPing(): number;
    setLastPing(lastPing: number): void;
    send(data: any): void;
    isAuthenticated(): boolean;
    setAuthenticated(authenticated: boolean): void;
}
export declare class Client implements IClient {
    private readonly id;
    private readonly token;
    private readonly msg;
    private socket;
    private lastPing;
    private authenticated;
    private idType;
    constructor({ id, token, msg, idType }: {
        id: string;
        token: string;
        msg: string;
        idType: IdType;
    });
    getId(): string;
    getIdType(): IdType;
    getToken(): string;
    getMsg(): string;
    getSocket(): MyWebSocket | null;
    setSocket(socket: MyWebSocket | null): void;
    getLastPing(): number;
    setLastPing(lastPing: number): void;
    send(data: any): void;
    isAuthenticated(): boolean;
    setAuthenticated(authenticated: boolean): void;
}
