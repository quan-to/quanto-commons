"use strict";
/**
 * Created by Lucas Teske on 07/09/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const helpers_1 = require("./helpers");
const parseDateTime = (value) => {
    let num = value;
    if (typeof num === 'string' && value !== '') {
        const tmp = new Date(num);
        num = Number.isNaN(tmp.getTime()) ? Number(value) : tmp;
    }
    if (helpers_1.isInteger(num)) {
        num = new Date(num);
        if (Number.isNaN(num.getTime())) {
            throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
        }
    }
    else {
        throw new TypeError(`Timestamp cannot represent non-integer value: ${JSON.stringify(value)}`);
    }
    return num;
};
const serializeDateTime = (value) => parseDateTime(value).toISOString();
const parseAstDateTime = (ast) => {
    if (ast.kind === graphql_1.Kind.INT || ast.kind === graphql_1.Kind.STRING) {
        return ast.value;
    }
    return undefined;
};
exports.default = new graphql_1.GraphQLScalarType({
    name: 'ISODateTime',
    description: 'The `DateTime` scalar type represents a DateTime Object in ISO8601 Format',
    serialize: serializeDateTime,
    parseValue: parseDateTime,
    parseLiteral: parseAstDateTime,
});
//# sourceMappingURL=datetime.js.map