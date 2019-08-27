import { GraphQLString, GraphQLList, GraphQLNonNull, } from 'graphql';
import { NotificationInput } from "./Notification";
export const DefaultQITArgs = {
    routingType: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Routing Type',
    },
    routingNumber: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Routing Number',
    },
};
export const DefaultSourceQITArgs = {
    srcRoutingType: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Source Routing Type',
    },
    srcRoutingNumber: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Source Routing Number',
    },
};
export const DefaultDestinationQITArgs = {
    dstRoutingType: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Destination Routing Type',
    },
    dstRoutingNumber: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Destination Routing Number',
    },
};
export const ExtractDefaultQITArgs = (data) => ({
    routingType: data.routingType,
    routingNumber: data.routingNumber,
});
export const ExtractDefaultSourceQITArgs = (data) => ({
    srcRoutingType: data.srcRoutingType,
    srcRoutingNumber: data.srcRoutingNumber,
});
export const ExtractDefaultDestinationQITArgs = (data) => ({
    dstRoutingType: data.dstRoutingType,
    dstRoutingNumber: data.dstRoutingNumber,
});
export const DefaultNotificationArgs = {
    notification: {
        type: new GraphQLList(NotificationInput),
        description: 'Notifications',
    },
};
//# sourceMappingURL=QIT.js.map