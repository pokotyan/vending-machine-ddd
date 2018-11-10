import InletModel from './index';

export const getCurrentStock = (inletModel: InletModel): number => {
    return inletModel.stock.length;
};

export const isSoldOut = (inletModel): boolean => {
    return inletModel.stock.length === 0;
};
