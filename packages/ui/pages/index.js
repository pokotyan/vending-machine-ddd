import * as vendingMachine from 'vending-machine';


const machine = vendingMachine.machineUseCase.initFromDB();

console.log(machine);

export default () => <div>Welcome to next.js!</div>