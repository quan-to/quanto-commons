"use strict";
/**
 * Created by Lucas Teske on 07/09/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const helpers_1 = require("./helpers");
const serializeFingerPrint = (value) => {
    const result = value && typeof value.valueOf === 'function' ? value.valueOf() : value;
    if (typeof Buffer !== 'undefined' && result instanceof Buffer) {
        return result.toString('hex').toUpperCase();
    }
    if (typeof ArrayBuffer !== 'undefined' && (result instanceof ArrayBuffer || result instanceof Uint8Array)) {
        return helpers_1.uint8arr2hex(new Uint8Array(result));
    }
    if (typeof result === 'string') {
        if (!helpers_1.validateHex.test(result)) {
            throw new TypeError(`Fingerprint cannot represent value: ${value}`);
        }
        return result.toUpperCase();
    }
    if (typeof result === 'number' && helpers_1.isFinite(result)) {
        return result.toString(16).toUpperCase();
    }
    throw new TypeError(`Fingerprint cannot represent value: ${JSON.stringify(value)}`);
};
const coerceFingerPrint = (value) => {
    if (typeof value === 'number') {
        return value.toString(16).toUpperCase();
    }
    if (typeof value !== 'string') {
        throw new TypeError(`String cannot represent a non string / hexadecimal / integer value: ${JSON.stringify(value)}`);
    }
    else if (!helpers_1.validateHex.test(value)) {
        throw new TypeError(`String cannot represent a non string / hexadecimal / integer value: ${value}`);
    }
    return value.toString().toUpperCase();
};
const parseAstFingerprint = (ast) => {
    switch (ast.kind) {
        case graphql_1.Kind.STRING:
            return ast.value;
        case graphql_1.Kind.INT:
            return parseInt(ast.value, 10);
        default:
            return undefined;
    }
};
exports.default = new graphql_1.GraphQLScalarType({
    name: 'FingerPrint',
    description: 'The `FingerPrint` scalar type represents a Key FingerPrint data, represented as uppercase HEX' +
        'character sequences.',
    serialize: serializeFingerPrint,
    parseValue: coerceFingerPrint,
    parseLiteral: parseAstFingerprint,
});
//# sourceMappingURL=fingerprint.js.map