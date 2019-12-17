/// <reference types="node" />
import { Server } from "net";
import { IConfig } from "./config";
declare type Optional<T> = {
    [P in keyof T]?: (T[P] | undefined);
};
declare function ExpressPeerServer(server: Server, options?: Optional<IConfig>): import("express-serve-static-core").Express;
declare function PeerServer(options?: Optional<IConfig>, callback?: (server: Server) => void): import("express-serve-static-core").Express;
export { ExpressPeerServer, PeerServer };
