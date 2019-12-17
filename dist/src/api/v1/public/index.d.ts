import express from "express";
import { IConfig } from "../../../config";
import { IRealm } from "../../../models/realm";
declare const _default: ({ config, realm }: {
    config: IConfig;
    realm: IRealm;
}) => express.Router;
export default _default;
