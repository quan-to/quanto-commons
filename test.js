/**
 * Created by Lucas Teske on 02/05/17.
 * @flow
 */

import {
  printQuantoHeader,
  QuantoColors,
  calcDvAgencia,
  calcDvConta,
  calcDvMod11,
  calcDvMod11Sub11,
} from './dist';

QuantoColors();

console.log('Color Test'.rainbow);

printQuantoHeader('Quanto Commons', 'Test');

console.log('Should all be true');
console.log(`calcDvAgencia(1) === 9 ${calcDvAgencia(1) === 9}`);
console.log(`calcDvConta(1234567890) === 2 ${calcDvConta(1234567890) === 2}`);
console.log(`calcDvConta(12345) === 6 ${calcDvConta(12345) === 6}`);
