/**
 * Created by Lucas Teske on 07/09/18.
 * @flow
 */

import {
  GraphQLScalarType,
  Kind,
} from 'graphql';

import {
  isFinite,
  isInteger,
  uint8arr2hex,
  validateHex,
} from './helpers';

const serializeFingerPrint = (value: mixed) => {
  const result = value && typeof value.valueOf === 'function' ? value.valueOf() : value;

  if (typeof Buffer !== 'undefined' && result instanceof Buffer) {
    return result.toString('hex').toUpperCase();
  }

  if (typeof ArrayBuffer !== 'undefined' && (result instanceof ArrayBuffer || result instanceof Uint8Array)) {
    return uint8arr2hex(new Uint8Array(result));
  }

  if (typeof result === 'string') {
    if (!validateHex.text(result)) {
      throw new TypeError(`Fingerprint cannot represent value: ${value}`);
    }
    return result.toUpperCase();
  }

  if (isFinite(result)) {
    return result.toString(16).toUpperCase();
  }

  throw new TypeError(`Fingerprint cannot represent value: ${JSON.stringify(value)}`);
};

const coerceFingerPrint = (value: mixed) : string => {
  if (isInteger(value)) {
    return value.toString(16).toUpperCase();
  }

  if (typeof value !== 'string') {
    throw new TypeError(`String cannot represent a non string / hexadecimal / integer value: ${JSON.stringify(value)}`);
  } else if (!validateHex(value)) {
    throw new TypeError(`String cannot represent a non string / hexadecimal / integer value: ${value}`);
  }

  return value.toString().toUpperCase();
};

const parseAstFingerprint = (ast) => {
  switch (ast.kind) {
    case Kind.STRING: return ast.value;
    case Kind.INT: return parseInt(ast.value, 10);
    default: return undefined;
  }
};

export default new GraphQLScalarType({
  name: 'FingerPrint',
  description:
  'The `FingerPrint` scalar type represents a Key FingerPrint data, represented as uppercase HEX' +
  'character sequences.',
  serialize: serializeFingerPrint,
  parseValue: coerceFingerPrint,
  parseLiteral: parseAstFingerprint,
});
