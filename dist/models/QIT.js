"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Lucas Teske on 31/08/18.
 */
const graphql_1 = require("graphql");
const Notification_1 = require("./Notification");
exports.DefaultQITArgs = {
    routingType: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Routing Type',
    },
    routingNumber: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Routing Number',
    },
};
exports.DefaultSourceQITArgs = {
    srcRoutingType: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Source Routing Type',
    },
    srcRoutingNumber: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Source Routing Number',
    },
};
exports.DefaultDestinationQITArgs = {
    dstRoutingType: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Destination Routing Type',
    },
    dstRoutingNumber: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        description: 'Destination Routing Number',
    },
};
exports.ExtractDefaultQITArgs = (data) => ({
    routingType: data.routingType,
    routingNumber: data.routingNumber,
});
exports.ExtractDefaultSourceQITArgs = (data) => ({
    srcRoutingType: data.srcRoutingType,
    srcRoutingNumber: data.srcRoutingNumber,
});
exports.ExtractDefaultDestinationQITArgs = (data) => ({
    dstRoutingType: data.dstRoutingType,
    dstRoutingNumber: data.dstRoutingNumber,
});
exports.DefaultNotificationArgs = {
    notification: {
        type: new graphql_1.GraphQLList(Notification_1.NotificationInput),
        description: 'Notifications',
    },
};
//# sourceMappingURL=QIT.js.map