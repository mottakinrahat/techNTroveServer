import { TPowerBankProduct } from './powerbank.interface';
import { PowerBankProductModel } from './powerbank.model';

const createPowerBankIntoDB = async (payload: TPowerBankProduct) => {
  const result = await PowerBankProductModel.create(payload);
  return result;
};

const getPowerBankFromDB = async () => {
  const result = await PowerBankProductModel.find();
  return result;
};

export const PowerBankServices = {
  createPowerBankIntoDB,
  getPowerBankFromDB,
};

