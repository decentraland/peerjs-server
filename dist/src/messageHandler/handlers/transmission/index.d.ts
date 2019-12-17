import { IClient } from "../../../models/client";
import { IMessage } from "../../../models/message";
import { IRealm } from "../../../models/realm";
export declare const TransmissionHandler: ({ realm }: {
    realm: IRealm;
}) => (client: IClient | undefined, message: IMessage) => boolean;
