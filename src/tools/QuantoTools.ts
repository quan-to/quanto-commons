/**
 * Created by Lucas Teske on 02/05/17.
 */

import '../colors';

const lineLength = '                                                                    '.length;

export const printQuantoHeader = (app: string, app2?: string) => {
  const title = (app === undefined || app === null) ? '' : app;

  // eslint-disable-next-line no-bitwise
  const preZeros = ((lineLength - title.length) / 2) | 0;
  const posZeros = lineLength - title.length - preZeros;
  const titleLine = `${new Array(preZeros).join(' ')}${title}${new Array(posZeros).join(' ')}`;

  console.log(' ---------------------------------------------------------------- '.bold);
  console.log('|   ____            _           ___                    _         |'.bold);
  console.log('|  / ___|___  _ __ | |_ __ _   / _ \\ _   _  __ _ _ __ | |_ ___   |'.bold);
  console.log("| | |   / _ \\| '_ \\| __/ _` | | | | | | | |/ _` | '_ \\| __/ _ \\  |".bold);
  console.log('| | |__| (_) | | | | || (_| | | |_| | |_| | (_| | | | | || (_) | |'.bold);
  console.log('|  \\____\\___/|_| |_|\\__\\__,_|  \\__\\_\\\\__,_|\\__,_|_| |_|\\__\\___/  |'.bold);
  console.log('|                                                                |'.bold);
  console.log(' ---------------------------------------------------------------- '.bold);
  console.log('                                                                  '.inverse);
  console.log(titleLine.inverse);

  if (app2 !== undefined && app2 !== undefined) {
    // eslint-disable-next-line no-bitwise
    const preZeros2 = ((lineLength - app2.length) / 2) | 0;
    const posZeros2 = lineLength - app2.length - preZeros2;
    const titleLine2 = `${new Array(preZeros2).join(' ')}${app2}${new Array(posZeros2).join(' ')}`;
    console.log(titleLine2.inverse);
  }

  console.log('                                                                  '.inverse);
  console.log('');
};

export const QuantoColors = () => {
  console.log(`${'QuantoColors()'.warn} is now deprecated and does nothing now.`.verbose.bold);
}; // Stub
