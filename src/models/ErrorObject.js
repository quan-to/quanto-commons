/**
 * Created by Lucas Teske on 02/05/17.
 * @flow
 */

import { GraphQLObjectType, GraphQLString } from 'graphql';
import ErrorCodes from './ErrorCodes';
import {
  QuantoColors,
} from '../tools';

QuantoColors();

export default class ErrorObject extends Error {

  errorCode: string;
  errorField: string|void;
  message: string;
  errorData: string;

  constructor(data: Object) {
    super(data.message);
    this.constructor = ErrorObject;   // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892
    this.name = this.constructor.name;
    this.__proto__ = ErrorObject.prototype; // Nasty fix for Babel Bug https://github.com/babel/babel/issues/4485#issuecomment-315569892
    Error.captureStackTrace(this, ErrorObject);


    this.errorCode = data.errorCode || ErrorCodes.InternalServerError;
    this.errorField = data.errorField || '';
    this.errorData = JSON.stringify(data.errorData) || '';
    this.message = data.message || this.stack || data.errorCode;

    if (ErrorCodes._valueToKey(data.errorCode) === null) {
      //$FlowFixMe
      console.log(`ErrorObject -- Warning: ErrorCode "${data.errorCode.warn.bold}" not in list of error codes!`.warn);
    }
  }

  toObject() {
    return JSON.parse(JSON.stringify(this));
  }

  toString() {
    // $FlowFixMe
    let me = `ErrorObject(${this.errorCode.warn.bold}): ${this.message})`;

    if (this.errorField !== undefined && this.errorField !== null) {
      // $FlowFixMe
      me += `on field ${this.errorField.warn.bold}`;
    }

    if (this.stack !== undefined && this.stack !== null) {
      me += `\nStackTrace: ${this.stack}`;
    }

    return me;
  }

  static GraphQL = new GraphQLObjectType({
    name: 'ErrorObject',
    description: 'An object containing the error data',
    fields: () => ({
      errorCode: {
        type: GraphQLString,
      },
      stackTrace: {
        type: GraphQLString,
        resolve(parent) {
          return parent.stack;
        }
      },
      errorField: {
        type: GraphQLString,
      },
      errorData: {
        type: GraphQLString,
      },
      message: {
        type: GraphQLString,
      },
    }),
  });
}
