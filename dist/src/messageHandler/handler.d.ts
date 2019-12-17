import { IClient } from "../models/client";
import { IMessage } from "../models/message";
export declare type Handler = (client: IClient | undefined, message: IMessage) => boolean;
