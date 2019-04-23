/**
 * Created by Lucas Teske on 22/05/18.
 * @flow
 */

import {isRunningInNodeJS} from '../tools';
import styles from './styles';

import termStyles from './term';

type QLogConfig = {
  showDateTime: boolean
  showBadge: boolean
  showLabel: boolean
  showErrorCodeErrorData: boolean
  showFilename: boolean
  showScope: boolean
  scope: string | null
  headPadding: number | null
}

class QLog {

  __config__: QLogConfig;

  __cache__ = {
    longestLabel: 0,
  };

  __disabledLogs__: string[];

  constructor() {
    const parent = this as any;
    this.__config__ = {
      showDateTime: true,
      showBadge: true,
      showLabel: false,
      showErrorCodeErrorData: true,
      showFilename: false,
      showScope: true,
      scope: null,
      headPadding: null,
    };

    this.__disabledLogs__ = ['debug', 'warn'];

    Object.keys(styles).forEach((stl) => {
      const style = styles[stl];
      parent.__cache__.longestLabel = Math.max(parent.__cache__.longestLabel, style.label ? style.label.length : 0);
    });

    if (isRunningInNodeJS()) {
      Object.keys(termStyles).forEach((k) => {
        parent[k] = termStyles[k].bind(null, parent);
      });
    } else {
      console.log('Chrome version not implemented. Ignoring');
      Object.keys(termStyles).forEach((k) => {
        parent[k] = console.log; // Placeholder for non NodeJS
      });
    }
  }

  bclip(...args: any[]) {

  }

  slash() {
    (this as any).__normalLog__('─────────────────────────────────────────────────────────────────────────────────────────────');
  }

  _enableLog(logName: string) {
    const idx = this.__disabledLogs__.indexOf(logName);
    if (idx !== -1) {
      this.__disabledLogs__.splice(idx, 1);
    }
  }

  _disableLog(logName: string) {
    const idx = this.__disabledLogs__.indexOf(logName);
    if (idx === -1) {
      this.__disabledLogs__.push(logName);
    }
  }

  set headPadding(value) {
    this.__config__.headPadding = value;
  }

  get headPadding() {
    return this.__config__.headPadding;
  }

  enableLogs(...args: string[]) {
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        arg.forEach((a) => {
          this._enableLog(a);
        });
      } else {
        this._enableLog(arg);
      }
    });
  }

  disableLogs(...args: string[]) {
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        arg.forEach((a) => {
          this._disableLog(a);
        });
      } else {
        this._disableLog(arg);
      }
    });
  }

  scope(...name: string[]) {
    const newQLogScope = new QLog();
    newQLogScope.__config__ = JSON.parse(JSON.stringify(this.__config__));
    newQLogScope.__cache__ = JSON.parse(JSON.stringify(this.__cache__));
    newQLogScope.__disabledLogs__ = this.__disabledLogs__;
    newQLogScope.__config__.scope = name.join(">");

    return newQLogScope;
  }

  set showDateTime(value: boolean) {
    this.__config__.showDateTime = value;
  }

  get showDateTime() {
    return this.__config__.showDateTime;
  }

  set showScope(value: boolean) {
    this.__config__.showScope = value;
  }

  get showScope() {
    return this.__config__.showScope;
  }

  set showBadge(value: boolean) {
    this.__config__.showBadge = value;
  }

  get showBadge() {
    return this.__config__.showBadge;
  }

  set showLabel(value: boolean) {
    this.__config__.showLabel = value;
  }

  get showLabel() {
    return this.__config__.showLabel;
  }

  set showErrorCodeErrorData(value: boolean) {
    this.__config__.showErrorCodeErrorData = value;
  }

  get showErrorCodeErrorData() {
    return this.__config__.showErrorCodeErrorData;
  }

  set showFilename(value: boolean) {
    this.__config__.showFilename = value;
  }

  get showFilename() {
    return this.__config__.showFilename;
  }
}

export default Object.assign(new QLog(), {});
