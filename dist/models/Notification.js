"use strict";
/**
 * Created by Lucas Teske on 31/08/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.NotificationType = {
    webhook: {
        value: 'webhook',
        description: 'Simple JSON POST',
    },
    push: {
        value: 'push',
        description: 'Simple JSON POST',
    },
};
exports.NotificationTypeEnum = new graphql_1.GraphQLEnumType({
    name: 'NotificationTypeEnum',
    description: 'Notification Type Enum',
    values: exports.NotificationType,
});
exports.NotificationInput = new graphql_1.GraphQLInputObjectType({
    name: 'NotificationDataInput',
    description: 'Data for registering a notification input',
    fields: {
        type: {
            type: new graphql_1.GraphQLNonNull(exports.NotificationTypeEnum),
            description: 'Notification Type',
        },
        url: {
            type: graphql_1.GraphQLString,
            description: '(WebHook) URL to call',
        },
        notificationId: {
            type: graphql_1.GraphQLString,
            description: '(Push) Notification Queue ID',
        },
        extra: {
            type: graphql_1.GraphQLString,
            description: 'JSON string containing extra data that should be sent with the main payload',
        },
    },
});
exports.WebhookCall = new graphql_1.GraphQLObjectType({
    name: 'WebhookCall',
    description: 'Webhook Call Information',
    fields: () => ({
        timestamp: {
            type: graphql_1.GraphQLFloat,
            description: 'UTC Unix Epoch Timestamp when the call happened',
        },
        statusCode: {
            type: graphql_1.GraphQLInt,
            description: 'HTTP Status Code',
        },
        response: {
            type: graphql_1.GraphQLString,
            description: 'Response from the target server',
        },
    }),
});
exports.Notification = new graphql_1.GraphQLObjectType({
    name: 'NotificationData',
    description: 'Notification Data',
    fields: () => ({
        type: {
            type: new graphql_1.GraphQLNonNull(exports.NotificationTypeEnum),
            description: 'Notification Type',
        },
        url: {
            type: graphql_1.GraphQLString,
            description: '(WebHook) URL to call',
        },
        notificationId: {
            type: graphql_1.GraphQLString,
            description: '(Push) Notification Queue ID',
        },
        extra: {
            type: graphql_1.GraphQLString,
            description: 'JSON string containing extra data that should be sent with the main payload',
        },
    }),
});
//# sourceMappingURL=Notification.js.map