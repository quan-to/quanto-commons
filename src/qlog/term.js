/**
 * Created by Lucas Teske on 22/05/18.
 * @flow
 */

import figures from 'figures';

import { ErrorObject } from '../models';
import {
  undefinedOrNull,
  getUTCNow,
  getCallerFilename,
} from '../tools';

import {
  stripColors,
} from '../colors/tools';

import styles from './styles';


const getStrColor = (str, color) => (!undefinedOrNull(str[color]) ? str[color] : str.info);

const buildTerminal = (parent, type, ...args) => {
  let msg = {};
  let additional = {};

  if (args.length === 1 && typeof (args[0]) === 'object' && args[0] !== null) {
    if (args[0] instanceof Error) {
      [msg] = args;
    } else {
      const [{ prefix, message, suffix }] = args;
      msg = message;
      additional = { suffix, prefix };
    }
  } else {
    msg = args.join(' ');
  }

  let msgBase = [];
  if (parent.__config__.showDateTime) {
    msgBase.push(`[${getUTCNow().white.dim}]`);
  }

  if (parent.__config__.showFilename) {
    msgBase.push(`[${getCallerFilename().verbose.bold}]`);
  }

  if (parent.__config__.scope) {
    if (Array.isArray(parent.__config__.scope)) {
      if (parent.__config__.scope.length === 1) {
        msgBase.push(`[${parent.__config__.scope[0].white}]`);
      } else {
        const scopes = parent.__config__.scope.filter(x => x.length !== 0);
        msgBase.push(`[${scopes.reduce((a, b) => `${a.white} ➡ ${b.white}`)}]`);
      }
    } else {
      msgBase.push(`[${parent.__config__.scope.white}]`);
    }
  }

  if (additional.prefix) {
    msgBase.push(`:${additional.prefix.white.dim}:`);
  }

  if (!undefinedOrNull(parent.__config__.headPadding)) {
    const base = msgBase.join(' ');
    const totalLen = base.length;
    const strippedLen = stripColors(base).length;
    const nonPrintableLen = totalLen - strippedLen;
    msgBase.length = 0;
    msgBase.push(base.padEnd(parent.__config__.headPadding + nonPrintableLen));
  }

  if (msgBase.length !== 0) {
    msgBase.push(figures.pointer);
    msgBase = msgBase.map(i => i.info);
  }

  if (parent.__config__.showBadge && type.badge) {
    msgBase.push(getStrColor(type.badge.padEnd(type.badge.length + 1), type.color));
  }

  if (parent.__config__.showLabel && type.label) {
    msgBase.push(`${getStrColor(type.label.underline, type.color).padEnd(parent.__cache__.longestLabel + 22)}`);
  }

  if (msg instanceof ErrorObject) {
    const {
      errorCode,
      errorField,
      message,
      errorData,
    } = msg;
    msgBase.push(getStrColor(`(${(errorCode || '').warn.bold}) ${message}`, type.color));
    msgBase.push(`\n    ${'ErrorField'.white.bold}: ${(errorField || '')}`.gray);
    if (parent.__config__.showErrorCodeErrorData) {
      const errorDataString = !undefinedOrNull(errorData) && errorData.trim().length !== 0 ?
        `\n        ${JSON.stringify(JSON.parse(errorData), null, 2).replace(/\n/g, '\n        ')}` :
        'null'.warn.bold;
      msgBase.push(`\n    ${'ErrorData'.white.bold}: ${errorDataString}`.gray);
    }
  } else if (msg instanceof Error) {
    const [name, ...rest] = msg.stack.split('\n');
    msgBase.push(getStrColor(name, type.color));
    msgBase.push(rest.map(l => l.replace(/^/, '\n')).join('').grey);
  } else {
    msgBase.push(getStrColor(msg, type.color)
      .replace(/\n/g, '\n    '));
  }
  if (!undefinedOrNull(additional.suffix)) {
    msgBase.push(additional.suffix);
  }

  return msgBase.join(' ');
};

const _defaultLog = (type, parent, ...data) => {
  if (parent.__disabledLogs__.indexOf(type.name) === -1) {
    console.log(buildTerminal(parent, type, ...data));
  }
};

const stylesLog = {};

Object.keys(styles).forEach((stl) => {
  stylesLog[stl] = _defaultLog.bind(null, styles[stl]);
});

stylesLog.__normalLog__ = (parent, ...data) => console.log(data.join(' '));

export default stylesLog;
