/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" /> 
/// <reference path="../node_modules/inversify/dts/inversify.d.ts" /> 

import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators'

const container = new Container();
const decorators = getDecorators(container);

export { container };
export const { lazyInject } = decorators;
