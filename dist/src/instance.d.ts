/// <reference types="node" />
import express from "express";
import { Server } from "net";
import { IConfig } from "./config";
export declare const createInstance: ({ app, server, options }: {
    app: express.Application;
    server: Server;
    options: IConfig;
}) => void;
