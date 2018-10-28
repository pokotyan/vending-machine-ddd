/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" /> 
/// <reference path="../node_modules/inversify/dts/inversify.d.ts" /> 

import 'reflect-metadata';

import { container } from './inversify.decorator';

import IInputStoreItem from './usecase/@input/storeItem/interface'
import { TYPES as TInputStoreItem } from './usecase/@input/storeItem/type';
import InputStoreItem from './usecase/@input/storeItem';

import IUseCaseStoreItem from './usecase/storeItem/interface';
import { TYPES as TUseCase } from './usecase/type';
import StoreItem from './usecase/storeItem';

import IInputInlet from './usecase/@input/inlet/interface'
import { TYPES as TInputInlet } from './usecase/@input/inlet/type';
import InputInlet from './usecase/@input/inlet';

import IUseCaseInlet from './usecase/inlet/interface';
import Inlet from './usecase/inlet';

import MachineModel from './domain/model/machine/interface';
import { TYPES as TMachine } from './domain/model/machine/type';
import Machine from './domain/model/machine';

// container.bind<"取得する時の型">("識別子").to("登録対象クラス")
container.bind<IInputStoreItem>(TInputStoreItem.onlyDrink).to(InputStoreItem);
container.bind<IUseCaseStoreItem>(TUseCase.StoreItem).to(StoreItem);

container.bind<IInputInlet>(TInputInlet.setInlet).to(InputInlet);
container.bind<IUseCaseInlet>(TUseCase.Inlet).to(Inlet);

container.bind<MachineModel>(TMachine.Machine).to(Machine);

export default container;