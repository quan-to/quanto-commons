"use strict";
/**
 * Created by Lucas Teske on 02/05/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ErrorCodes_1 = require("./ErrorCodes");
class ErrorObject extends Error {
    constructor(data) {
        super(data.message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, ErrorObject);
        this.errorCode = data.errorCode || ErrorCodes_1.ErrorCodes.InternalServerError;
        this.errorField = data.errorField || '';
        this.errorData = JSON.stringify(data.errorData) || '';
        this.message = data.message || this.stack || data.errorCode;
        if (ErrorCodes_1.ErrorCodeValueToKey(data.errorCode) === null) {
            console.log(`ErrorObject -- Warning: ErrorCode "${data.errorCode}" not in list of error codes!`);
        }
    }
    toObject() {
        return JSON.parse(JSON.stringify(this));
    }
    toString() {
        let me = `ErrorObject(${this.errorCode}): ${this.message})`;
        if (this.errorField !== undefined && this.errorField !== null) {
            me += `on field ${this.errorField}`;
        }
        if (this.stack !== undefined && this.stack !== null) {
            me += `\nStackTrace: ${this.stack}`;
        }
        return me;
    }
}
exports.default = ErrorObject;
ErrorObject.GraphQL = new graphql_1.GraphQLObjectType({
    name: 'ErrorObject',
    description: 'An object containing the error data',
    fields: () => ({
        errorCode: {
            type: graphql_1.GraphQLString,
        },
        stackTrace: {
            type: graphql_1.GraphQLString,
            resolve(parent) {
                return parent.stack;
            },
        },
        errorField: {
            type: graphql_1.GraphQLString,
        },
        errorData: {
            type: graphql_1.GraphQLString,
        },
        message: {
            type: graphql_1.GraphQLString,
        },
    }),
});
//# sourceMappingURL=ErrorObject.js.map