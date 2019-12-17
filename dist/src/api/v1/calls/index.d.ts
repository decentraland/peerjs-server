import express from "express";
import { IMessageHandler } from "../../../messageHandler";
import { IRealm } from "../../../models/realm";
declare const _default: ({ realm, messageHandler }: {
    realm: IRealm;
    messageHandler: IMessageHandler;
}) => express.Router;
export default _default;
