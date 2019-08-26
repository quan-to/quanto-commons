/**
 * Created by Lucas Teske on 07/09/18.
 *
 */

import {
  GraphQLScalarType,
  Kind,
} from 'graphql';

import {isInteger} from './helpers';

const parseDateTime = (value: any) => {
  let num = value;

  if (typeof num === 'string' && value !== '') {
    const tmp = new Date(num);
    num = Number.isNaN(tmp.getTime()) ? Number(value) : tmp;
  }

  if (isInteger(num)) {
    num = new Date(num);
    if (Number.isNaN(num.getTime())) {
      throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
    }
  } else {
    throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
  }

  return num;
};

const serializeDateTime = (value: any): string => parseDateTime(value).toISOString();

const parseAstDateTime = (ast: any) => {
  if (ast.kind === Kind.INT || ast.kind === Kind.STRING) {
    return ast.value;
  }

  return undefined;
};

export default new GraphQLScalarType({
  name: 'ISODateTime',
  description:
    'The `DateTime` scalar type represents a DateTime Object in ISO8601 Format',
  serialize: serializeDateTime,
  parseValue: parseDateTime,
  parseLiteral: parseAstDateTime,
});
