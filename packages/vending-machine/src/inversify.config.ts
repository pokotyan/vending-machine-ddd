/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" /> 
/// <reference path="../node_modules/inversify/dts/inversify.d.ts" /> 

import 'reflect-metadata';
import { container } from './inversify.decorator';

import { TYPES as TUseCase } from './usecase/type';

import IInletRepository from './repository/inlet/interface'
import { TYPES as TInletRepository } from './repository/inlet/type';
import InletRepository from './repository/inlet';

import IMachineRepository from './repository/machine/interface'
import { TYPES as TMachineRepository } from './repository/machine/type';
import MachineRepository from './repository/machine';

import IMachineUseCase from './usecase/machine/interface';
import MachineUseCase from './usecase/machine';

import MachineModel from './domain/model/machine/interface';
import { TYPES as TMachine } from './domain/model/machine/type';
import Machine from './domain/model/machine';

// container.bind<"取得する時の型">("識別子").to("登録対象クラス")
container.bind<IInletRepository>(TInletRepository.set).to(InletRepository);

container.bind<IMachineRepository>(TMachineRepository.getCurrentStatus).to(MachineRepository);
container.bind<IMachineUseCase>(TUseCase.initFromDB).to(MachineUseCase);
container.bind<IMachineUseCase>(TUseCase.setInlet).to(MachineUseCase);

container.bind<IMachineUseCase>("Newable<Machine>").toConstructor<Machine>(Machine); // constructor injection

export default container;