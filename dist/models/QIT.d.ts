/**
 * Created by Lucas Teske on 31/08/18.
 */
import { GraphQLList, GraphQLNonNull } from 'graphql';
export declare type DefaultQITArgsType = {
    routingType: string;
    routingNumber: string;
};
export declare type DefaultSourceQITArgsType = {
    srcRoutingType: string;
    srcRoutingNumber: string;
};
export declare type DefaultDestinationQITArgsType = {
    dstRoutingType: string;
    dstRoutingNumber: string;
};
export declare const DefaultQITArgs: {
    routingType: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
    routingNumber: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
};
export declare const DefaultSourceQITArgs: {
    srcRoutingType: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
    srcRoutingNumber: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
};
export declare const DefaultDestinationQITArgs: {
    dstRoutingType: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
    dstRoutingNumber: {
        type: GraphQLNonNull<import("graphql").GraphQLNullableType>;
        description: string;
    };
};
export declare const ExtractDefaultQITArgs: (data: any) => {
    routingType: any;
    routingNumber: any;
};
export declare const ExtractDefaultSourceQITArgs: (data: any) => {
    srcRoutingType: any;
    srcRoutingNumber: any;
};
export declare const ExtractDefaultDestinationQITArgs: (data: any) => {
    dstRoutingType: any;
    dstRoutingNumber: any;
};
export declare const DefaultNotificationArgs: {
    notification: {
        type: GraphQLList<import("graphql").GraphQLType>;
        description: string;
    };
};
