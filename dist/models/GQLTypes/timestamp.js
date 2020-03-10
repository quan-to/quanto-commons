"use strict";
/**
 * Created by Lucas Teske on 07/09/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const helpers_1 = require("./helpers");
const transformTimestamp = (value) => {
    let num = value;
    if (typeof num === 'string' && value !== '') {
        const tmp = new Date(num);
        num = Number.isNaN(tmp.getTime()) ? Number(value) : tmp.getTime();
    }
    if (num instanceof Date) {
        num = num.getTime();
    }
    if (!helpers_1.isInteger(num)) {
        throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
    }
    return value;
};
exports.default = new graphql_1.GraphQLScalarType({
    name: 'Timestamp',
    description: 'The `Timestamp` scalar type represents a millis timestamp in Unix Epoch Format (UTC).' +
        'It simple counts number of milliseconds since 01/01/1970 00:00:00 UTC',
    serialize: transformTimestamp,
    parseValue: transformTimestamp,
    parseLiteral: ast => ((ast.kind === graphql_1.Kind.INT || ast.kind === graphql_1.Kind.FLOAT) ? parseInt(ast.value, 10) : undefined),
});
//# sourceMappingURL=timestamp.js.map