/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" /> 
/// <reference path="../node_modules/inversify/dts/inversify.d.ts" /> 

import 'reflect-metadata';
import { container } from './inversify.decorator';

import { TYPES as TUseCase } from './usecase/machine/type';

import IInletRepository from './repository/inlet/interface'
import { TYPES as TInletRepository } from './repository/inlet/type';
import InletRepository from './repository/inlet';

import IItemRepository from './repository/item/interface'
import { TYPES as TItemRepository } from './repository/item/type';
import ItemRepository from './repository/item';

import IMachineRepository from './repository/machine/interface'
import { TYPES as TMachineRepository } from './repository/machine/type';
import MachineRepository from './repository/machine';

import IMachineUseCase from './usecase/machine/interface';
import MachineUseCase from './usecase/machine';

// container.bind<"取得する時の型">("識別子").to("登録対象クラス")
container.bind<IInletRepository>(TInletRepository.inletRepository).to(InletRepository);
container.bind<IItemRepository>(TItemRepository.itemRepository).to(ItemRepository);
container.bind<IMachineRepository>(TMachineRepository.machineRepository).to(MachineRepository);

container.bind<IMachineUseCase>(TUseCase.machineUseCase).to(MachineUseCase);

export default container;