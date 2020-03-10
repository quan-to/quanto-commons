/**
 * Created by Lucas Teske on 31/08/18.
 */
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLObjectType } from 'graphql';
import { StringEnumTypeFields } from "./GQLTypes/EnumFieldTypes";
export declare const NotificationType: {
    [id: string]: StringEnumTypeFields;
};
export declare const NotificationTypeEnum: GraphQLEnumType;
export declare const NotificationInput: GraphQLInputObjectType;
export declare const WebhookCall: GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
export declare const Notification: GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
