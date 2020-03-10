/**
 * Created by Lucas Teske on 10/12/18.
 */
import { GraphQLEnumType } from 'graphql';
import { StringEnumTypeFields } from "./GQLTypes/EnumFieldTypes";
export declare const RequestStatusValues: {
    [id: string]: StringEnumTypeFields;
};
export declare const RequestStatus: {
    [id: string]: string;
};
export declare const RequestStatusEnum: GraphQLEnumType;
