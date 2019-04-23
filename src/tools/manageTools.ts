/**
 * Created by Lucas Teske on 22/05/18.
 * @flow
 */

import dayjs from 'dayjs';

import { basename } from './format';

export function getCallerFilename(level?: number) {
  const lvl = level || 2;
  const _ = Error.prepareStackTrace;
  Error.prepareStackTrace = (error, stack) => stack;
  const { stack } = new Error();
  Error.prepareStackTrace = _;

  // @ts-ignore
  const callers = stack.map(x => basename(x.getFileName()));
  let callerI = callers;
  for (let i = 0; i < lvl; i++) {
    // @ts-ignore
    callerI = callerI.filter(x => x !== callers[i]);
  }
  return <string>callerI[0];
}

export function getLocaleNowTime() {
  return new Date().toLocaleTimeString();
}

export function getLocaleNowDate() {
  return new Date().toLocaleDateString();
}

export function getUTCNow() {
  return dayjs(new Date().toISOString()
    .substr(0, 23))
    .format('YYYYMMDD-HHmmss');
}
