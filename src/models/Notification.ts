/**
 * Created by Lucas Teske on 31/08/18.
 */

import {
  GraphQLString,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql';
import {StringEnumTypeFields} from "./GQLTypes/EnumFieldTypes";


export const NotificationType: { [id: string]: StringEnumTypeFields } = {
  webhook: {
    value: 'webhook',
    description: 'Simple JSON POST',
  },
  push: {
    value: 'push',
    description: 'Simple JSON POST',
  },
};

export const NotificationTypeEnum = new GraphQLEnumType({
  name: 'NotificationTypeEnum',
  description: 'Notification Type Enum',
  values: NotificationType,
});

export const NotificationInput = new GraphQLInputObjectType({
  name: 'NotificationDataInput',
  description: 'Data for registering a notification input',
  fields: {
    type: {
      type: new GraphQLNonNull(NotificationTypeEnum),
      description: 'Notification Type',
    },
    url: {
      type: GraphQLString,
      description: '(WebHook) URL to call',
    },
    notificationId: {
      type: GraphQLString,
      description: '(Push) Notification Queue ID',
    },
    extra: {
      type: GraphQLString,
      description: 'JSON string containing extra data that should be sent with the main payload',
    },
  },
});

export const WebhookCall = new GraphQLObjectType({
  name: 'WebhookCall',
  description: 'Webhook Call Information',
  fields: () => ({
    timestamp: {
      type: GraphQLFloat,
      description: 'UTC Unix Epoch Timestamp when the call happened',
    },
    statusCode: {
      type: GraphQLInt,
      description: 'HTTP Status Code',
    },
    response: {
      type: GraphQLString,
      description: 'Response from the target server',
    },
  }),
});

export const Notification = new GraphQLObjectType({
  name: 'NotificationData',
  description: 'Notification Data',
  fields: () => ({
    type: {
      type: new GraphQLNonNull(NotificationTypeEnum),
      description: 'Notification Type',
    },
    url: {
      type: GraphQLString,
      description: '(WebHook) URL to call',
    },
    notificationId: {
      type: GraphQLString,
      description: '(Push) Notification Queue ID',
    },
    extra: {
      type: GraphQLString,
      description: 'JSON string containing extra data that should be sent with the main payload',
    },
  }),
});
