/**
 * Created by Lucas Teske on 02/05/17.
 * @flow
 */

import {
  printQuantoHeader,
  calcDvAgencia,
  calcDvConta,
  ErrorObject,
  QLog,
  ErrorCodes,
} from './dist';

import './dist/colors';

QLog.enableLogs(['debug', 'warn']);
QLog.headPadding = 40;

QLog.log('All logs enabled!');

QLog.error('Error Tag');
QLog.fatal('Fatal Tag');
QLog.fav('Favorite Tag');
QLog.info('Information Tag');
QLog.star('Star Tag');
QLog.success('Success Tag');
QLog.warn('Warning Tag');
QLog.complete('Complete Tag');
QLog.pending('Pending Tag');
QLog.note('Note Tag');
QLog.start('Start Tag');
QLog.pause('Pause Tag');
QLog.debug('Debug Tag');
QLog.await('Await Tag');
QLog.watch('Watch Tag');
QLog.log('Log Tag');

QLog.slash();
const toDisable = ['debug', 'warn', 'info', 'pause'];
QLog.disableLogs(toDisable);
QLog.log('Disabled ', toDisable, ' logs!');

QLog.error('Error Tag');
QLog.fatal('Fatal Tag');
QLog.fav('Favorite Tag');
QLog.info('Information Tag');
QLog.star('Star Tag');
QLog.success('Success Tag');
QLog.warn('Warning Tag');
QLog.complete('Complete Tag');
QLog.pending('Pending Tag');
QLog.note('Note Tag');
QLog.start('Start Tag');
QLog.pause('Pause Tag');
QLog.debug('Debug Tag');
QLog.await('Await Tag');
QLog.watch('Watch Tag');
QLog.log('Log Tag');

QLog.slash();
QLog.error(new ErrorObject({
  errorCode: ErrorCodes.NotFound,
  errorField: 'Test',
  message: 'Test for ErrorObject',
  errorData: {
    a: 'b',
    hue: 'br',
    z: 3,
  },
}));
QLog.slash();
QLog.error(new Error('HUEBR'));


const scopedLog0 = QLog.scope('A');
const scopedLog1 = QLog.scope('A', 'Bcas');
const scopedLog2 = QLog.scope('A', 'Basdasdasdasd');

scopedLog0.start('huebrbrbr');
scopedLog1.start('huebrbrbr');
scopedLog2.start('huebrbrbr');

QLog.start({ prefix: 'Process 1', message: 'Process 1 call' });

console.log('Color Test'.rainbow.bold);

printQuantoHeader('Quanto Commons', 'Test');

console.log('Should all be true');
console.log(`calcDvAgencia(1) === 9 ${calcDvAgencia(1) === 9}`);
console.log(`calcDvConta(1234567890) === 2 ${calcDvConta(1234567890) === 2}`);
console.log(`calcDvConta(12345) === 6 ${calcDvConta(12345) === 6}`);


console.log('hue'.verbose);

QLog.start(`hue${'a'.warn.bold.bgCyan} bbababa ${'abcdefg'.error.bold}
huebr
hurbaba
${'abc'.warn.bold.bgBlue}
`.warn);
