/**
 * Created by Lucas Teske on 22/05/18.
 * @flow
 */

import moment from 'moment';

import { basename } from './format';

export function getCallerFilename(level) {
  const lvl = level || 2;
  const _ = Error.prepareStackTrace;
  Error.prepareStackTrace = (error, stack) => stack;
  const { stack } = new Error();
  Error.prepareStackTrace = _;

  const callers = stack.map(x => basename(x.getFileName()));
  let callerI = callers;
  for (let i = 0; i < lvl; i++) {
    callerI = callerI.filter(x => x !== callers[i]);
  }
  return callerI[0];
}

export function getLocaleNowTime() {
  return new Date().toLocaleTimeString();
}

export function getLocaleNowDate() {
  return new Date().toLocaleDateString();
}

export function getUTCNow() {
  return moment.utc().format('YYYYMMDD-HHmmss');
}
