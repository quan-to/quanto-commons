/**
 * Created by Lucas Teske on 02/05/17.
 */
import { GraphQLObjectType } from 'graphql';
export default class ErrorObject extends Error {
    errorCode: string;
    errorField?: string | void;
    message: string;
    errorData: string;
    constructor(data: any);
    toObject(): any;
    toString(): string;
    static GraphQL: GraphQLObjectType<any, any, {
        [key: string]: any;
    }>;
}
