/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" /> 
/// <reference path="../node_modules/inversify/dts/inversify.d.ts" /> 

import 'reflect-metadata';

import { container } from './inversify.decorator';

import IInputStoreItem from './usecase/input/storeItem/interface'
import { TYPES as TInputStoreItem } from './usecase/input/storeItem/type';
import InputStoreItem from './usecase/input/storeItem';

import IUseCaseStoreItem from './usecase/storeItem/interface';
import { TYPES as TStoreItem } from './usecase/storeItem/type';
import StoreItem from './usecase/storeItem';

import MachineModel from './domain/model/machine';
import { TYPES as TMachine } from './repository/machine/type';
import Machine from './repository/machine';

// container.bind<"取得する時の型">("識別子").to("登録対象クラス")
container.bind<IInputStoreItem>(TInputStoreItem.Input).to(InputStoreItem);
container.bind<IUseCaseStoreItem>(TStoreItem.UseCase).to(StoreItem);
container.bind<MachineModel>(TMachine.Machine).to(Machine);

export default container;