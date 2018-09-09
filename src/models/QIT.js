/**
 * Created by Lucas Teske on 31/08/18.
 * @flow
 */
import {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { NotificationInput } from './Notification';

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

export const DefaultNotificationArgs = {
  notification: {
    type: new GraphQLList(NotificationInput),
    description: 'Notifications',
  },
};
