import { GraphQLObjectType, GraphQLString } from 'graphql';
import { ErrorCodes, ErrorCodeValueToKey } from './ErrorCodes';
export default class ErrorObject extends Error {
    constructor(data) {
        super(data.message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, ErrorObject);
        this.errorCode = data.errorCode || ErrorCodes.InternalServerError;
        this.errorField = data.errorField || '';
        this.errorData = JSON.stringify(data.errorData) || '';
        this.message = data.message || this.stack || data.errorCode;
        if (ErrorCodeValueToKey(data.errorCode) === null) {
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
ErrorObject.GraphQL = new GraphQLObjectType({
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
            },
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
//# sourceMappingURL=ErrorObject.js.map