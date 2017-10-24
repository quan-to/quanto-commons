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

export default class ErrorObject {

  errorCode: string;
  stackTrace: string|void;
  errorField: string|void;
  message: string;
  errorData: string;

  constructor(data: Object) {
    if (data !== undefined) {
      this.errorCode = data.errorCode;
      this.stackTrace = data.stackTrace;
      this.errorField = data.errorField;
      this.errorData = JSON.stringify(data.errorData) || '';
      this.message = data.message || data.stackTrace || data.errorCode;

      if (ErrorCodes._valueToKey(data.errorCode) === null) {
        // $FlowFixMe
        console.log(`ErrorObject -- Warning: ErrorCode "${data.errorCode.warn.bold}" not in list of error codes!`.warn);
      }
    } else {
      throw ErrorCodes.NoDataAvailable;
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

    if (this.stackTrace !== undefined && this.stackTrace !== null) {
      me += `\nStackTrace: ${this.stackTrace}`;
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
