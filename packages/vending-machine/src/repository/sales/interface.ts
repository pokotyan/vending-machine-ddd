import MoneyModel from '../../domain/model/money';

export default interface ISalesRepository {
  getCurrentStatus(): MoneyModel;
};
