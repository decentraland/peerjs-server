import express from "express";
import { IConfig } from "../config";
import { IMessageHandler } from "../messageHandler";
import { IRealm } from "../models/realm";
export declare const Api: ({ config, realm, messageHandler }: {
    config: IConfig;
    realm: IRealm;
    messageHandler: IMessageHandler;
}) => express.Router;
