import machine from 'vending-machine';


machine.storedItem([{
  name: 'chocolate',
  price: 100,
  type: 'food'
},{
  name: 'cola',
  price: 100,
  type: 'drink'
}]);

console.log(machine);

export default () => <div>Welcome to next.js!</div>