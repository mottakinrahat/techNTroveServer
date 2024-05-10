import { TClient } from "./client.interface";
import { Client } from "./client.model";

// create user /register user
const createClientIntoDB = async (payload: TClient) => {
  const result = await Client.create(payload);

  return result;
};
const getClientFromDB = async (payload: TClient) => {
  const result = await Client.find(payload);

  return result;
};

export const ClientService = {
  createClientIntoDB,
  getClientFromDB,
};
