import { IClient, Client } from "../src/models/client";
import { IdType } from "../src/enums";

export const wait = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
export function createClient({ id = 'id', token = '', msg = '', idType = IdType.SELF_ASSIGNED }: { id?: string; token?: string; msg?: string; idType?: IdType; } = {}): IClient {
  const client = new Client({ id, token, idType, msg });
  client.setAuthenticated(true);
  return client;
}