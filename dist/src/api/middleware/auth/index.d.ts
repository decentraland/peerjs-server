import express from "express";
import { IConfig } from "../../../config";
import { IRealm } from "../../../models/realm";
import { IMiddleware } from "../middleware";
export declare class AuthMiddleware implements IMiddleware {
    private readonly config;
    private readonly realm;
    constructor(config: IConfig, realm: IRealm);
    handle(req: express.Request, res: express.Response, next: express.NextFunction): any;
}
