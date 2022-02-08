import { IPurchaseContract } from 'app/shared/model/purchase-contract.model';
import { ISaleContract } from 'app/shared/model/sale-contract.model';

export interface IPort {
  id?: number;
  lodingTime?: number | null;
  unloadingTime?: number | null;
  waitingTime?: number | null;
  purchaseContracts?: IPurchaseContract[] | null;
  saleContracts?: ISaleContract[] | null;
}

export const defaultValue: Readonly<IPort> = {};
