/**
 * Created by Lucas Teske on 07/09/18.
 */


import {
  GraphQLScalarType,
  Kind,
} from 'graphql';

import {isInteger} from './helpers';

const transformTimestamp = (value: any): number => {
  let num = value;

  if (typeof num === 'string' && value !== '') {
    const tmp = new Date(num);
    num = Number.isNaN(tmp.getTime()) ? Number(value) : tmp.getTime();
  }

  if (num instanceof Date) {
    num = num.getTime();
  }

  if (!isInteger(num)) {
    throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
  }

  return value;
};

export default new GraphQLScalarType({
  name: 'Timestamp',
  description:
  'The `Timestamp` scalar type represents a millis timestamp in Unix Epoch Format (UTC).' +
  'It simple counts number of milliseconds since 01/01/1970 00:00:00 UTC',
  serialize: transformTimestamp,
  parseValue: transformTimestamp,
  parseLiteral: ast => ((ast.kind === Kind.INT || ast.kind === Kind.FLOAT) ? parseInt(ast.value, 10) : undefined),
});
