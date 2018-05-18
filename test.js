/**
 * Created by Lucas Teske on 02/05/17.
 * @flow
 */

import {
  QuantoColors,
  printQuantoHeader,
  calcDvAgencia,
  calcDvConta,
} from './dist';

import './dist/colors';

QuantoColors();

console.log('Color Test'.rainbow.bold);

printQuantoHeader('Quanto Commons', 'Test');

console.log('Should all be true');
console.log(`calcDvAgencia(1) === 9 ${calcDvAgencia(1) === 9}`);
console.log(`calcDvConta(1234567890) === 2 ${calcDvConta(1234567890) === 2}`);
console.log(`calcDvConta(12345) === 6 ${calcDvConta(12345) === 6}`);


console.log('hue'.verbose);

console.log(`hue${'a'.warn.bold.bgCyan} bbababa ${'abcdefg'.error.bold}
huebr
hurbaba
${'abc'.warn.bold.bgBlue}
`.warn);

