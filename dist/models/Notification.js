'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.WebhookCall = exports.NotificationInput = exports.NotificationTypeEnum = exports.NotificationType = undefined;

var _graphql = require('graphql');

var NotificationType = exports.NotificationType = {
  webhook: {
    value: 'webhook',
    description: 'Simple JSON POST'
  },
  push: {
    value: 'push',
    description: 'Simple JSON POST'
  }
}; /**
    * Created by Lucas Teske on 31/08/18.
    * 
    */

var NotificationTypeEnum = exports.NotificationTypeEnum = new _graphql.GraphQLEnumType({
  name: 'NotificationTypeEnum',
  description: 'Notification Type Enum',
  values: NotificationType
});

var NotificationInput = exports.NotificationInput = new _graphql.GraphQLInputObjectType({
  name: 'NotificationDataInput',
  description: 'Data for registering a notification input',
  fields: {
    type: {
      type: new _graphql.GraphQLNonNull(NotificationTypeEnum),
      description: 'Notification Type'
    },
    url: {
      type: _graphql.GraphQLString,
      description: '(WebHook) URL to call'
    },
    notificationId: {
      type: _graphql.GraphQLString,
      description: '(Push) Notification Queue ID'
    },
    extra: {
      type: _graphql.GraphQLString,
      description: 'JSON string containing extra data that should be sent with the main payload'
    }
  }
});

var WebhookCall = exports.WebhookCall = new _graphql.GraphQLObjectType({
  name: 'WebhookCall',
  description: 'Webhook Call Information',
  fields: function fields() {
    return {
      timestamp: {
        type: _graphql.GraphQLFloat,
        description: 'UTC Unix Epoch Timestamp when the call happened'
      },
      statusCode: {
        type: _graphql.GraphQLInt,
        description: 'HTTP Status Code'
      },
      response: {
        type: _graphql.GraphQLString,
        description: 'Response from the target server'
      }
    };
  }
});

var Notification = exports.Notification = new _graphql.GraphQLObjectType({
  name: 'NotificationData',
  description: 'Notification Data',
  fields: function fields() {
    return {
      type: {
        type: new _graphql.GraphQLNonNull(NotificationTypeEnum),
        description: 'Notification Type'
      },
      url: {
        type: _graphql.GraphQLString,
        description: '(WebHook) URL to call'
      },
      notificationId: {
        type: _graphql.GraphQLString,
        description: '(Push) Notification Queue ID'
      },
      extra: {
        type: _graphql.GraphQLString,
        description: 'JSON string containing extra data that should be sent with the main payload'
      }
    };
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvTm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblR5cGUiLCJ3ZWJob29rIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInB1c2giLCJOb3RpZmljYXRpb25UeXBlRW51bSIsIkdyYXBoUUxFbnVtVHlwZSIsIm5hbWUiLCJ2YWx1ZXMiLCJOb3RpZmljYXRpb25JbnB1dCIsIkdyYXBoUUxJbnB1dE9iamVjdFR5cGUiLCJmaWVsZHMiLCJ0eXBlIiwiR3JhcGhRTE5vbk51bGwiLCJ1cmwiLCJHcmFwaFFMU3RyaW5nIiwibm90aWZpY2F0aW9uSWQiLCJleHRyYSIsIldlYmhvb2tDYWxsIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJ0aW1lc3RhbXAiLCJHcmFwaFFMRmxvYXQiLCJzdGF0dXNDb2RlIiwiR3JhcGhRTEludCIsInJlc3BvbnNlIiwiTm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBVU8sSUFBTUEsOENBQW1CO0FBQzlCQyxXQUFTO0FBQ1BDLFdBQU8sU0FEQTtBQUVQQyxpQkFBYTtBQUZOLEdBRHFCO0FBSzlCQyxRQUFNO0FBQ0pGLFdBQU8sTUFESDtBQUVKQyxpQkFBYTtBQUZUO0FBTHdCLENBQXpCLEMsQ0FmUDs7Ozs7QUEwQk8sSUFBTUUsc0RBQXVCLElBQUlDLHdCQUFKLENBQW9CO0FBQ3REQyxRQUFNLHNCQURnRDtBQUV0REosZUFBYSx3QkFGeUM7QUFHdERLLFVBQVFSO0FBSDhDLENBQXBCLENBQTdCOztBQU1BLElBQU1TLGdEQUFvQixJQUFJQywrQkFBSixDQUEyQjtBQUMxREgsUUFBTSx1QkFEb0Q7QUFFMURKLGVBQWEsMkNBRjZDO0FBRzFEUSxVQUFRO0FBQ05DLFVBQU07QUFDSkEsWUFBTSxJQUFJQyx1QkFBSixDQUFtQlIsb0JBQW5CLENBREY7QUFFSkYsbUJBQWE7QUFGVCxLQURBO0FBS05XLFNBQUs7QUFDSEYsWUFBTUcsc0JBREg7QUFFSFosbUJBQWE7QUFGVixLQUxDO0FBU05hLG9CQUFnQjtBQUNkSixZQUFNRyxzQkFEUTtBQUVkWixtQkFBYTtBQUZDLEtBVFY7QUFhTmMsV0FBTztBQUNMTCxZQUFNRyxzQkFERDtBQUVMWixtQkFBYTtBQUZSO0FBYkQ7QUFIa0QsQ0FBM0IsQ0FBMUI7O0FBdUJBLElBQU1lLG9DQUFjLElBQUlDLDBCQUFKLENBQXNCO0FBQy9DWixRQUFNLGFBRHlDO0FBRS9DSixlQUFhLDBCQUZrQztBQUcvQ1EsVUFBUTtBQUFBLFdBQU87QUFDYlMsaUJBQVc7QUFDVFIsY0FBTVMscUJBREc7QUFFVGxCLHFCQUFhO0FBRkosT0FERTtBQUtibUIsa0JBQVk7QUFDVlYsY0FBTVcsbUJBREk7QUFFVnBCLHFCQUFhO0FBRkgsT0FMQztBQVNicUIsZ0JBQVU7QUFDUlosY0FBTUcsc0JBREU7QUFFUloscUJBQWE7QUFGTDtBQVRHLEtBQVA7QUFBQTtBQUh1QyxDQUF0QixDQUFwQjs7QUFtQkEsSUFBTXNCLHNDQUFlLElBQUlOLDBCQUFKLENBQXNCO0FBQ2hEWixRQUFNLGtCQUQwQztBQUVoREosZUFBYSxtQkFGbUM7QUFHaERRLFVBQVE7QUFBQSxXQUFPO0FBQ2JDLFlBQU07QUFDSkEsY0FBTSxJQUFJQyx1QkFBSixDQUFtQlIsb0JBQW5CLENBREY7QUFFSkYscUJBQWE7QUFGVCxPQURPO0FBS2JXLFdBQUs7QUFDSEYsY0FBTUcsc0JBREg7QUFFSFoscUJBQWE7QUFGVixPQUxRO0FBU2JhLHNCQUFnQjtBQUNkSixjQUFNRyxzQkFEUTtBQUVkWixxQkFBYTtBQUZDLE9BVEg7QUFhYmMsYUFBTztBQUNMTCxjQUFNRyxzQkFERDtBQUVMWixxQkFBYTtBQUZSO0FBYk0sS0FBUDtBQUFBO0FBSHdDLENBQXRCLENBQXJCIiwiZmlsZSI6Ik5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBMdWNhcyBUZXNrZSBvbiAzMS8wOC8xOC5cbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHtcbiAgR3JhcGhRTFN0cmluZyxcbiAgR3JhcGhRTEVudW1UeXBlLFxuICBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLFxuICBHcmFwaFFMT2JqZWN0VHlwZSxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxGbG9hdCxcbiAgR3JhcGhRTEludCxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25UeXBlID0ge1xuICB3ZWJob29rOiB7XG4gICAgdmFsdWU6ICd3ZWJob29rJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBKU09OIFBPU1QnLFxuICB9LFxuICBwdXNoOiB7XG4gICAgdmFsdWU6ICdwdXNoJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBKU09OIFBPU1QnLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvblR5cGVFbnVtID0gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gIG5hbWU6ICdOb3RpZmljYXRpb25UeXBlRW51bScsXG4gIGRlc2NyaXB0aW9uOiAnTm90aWZpY2F0aW9uIFR5cGUgRW51bScsXG4gIHZhbHVlczogTm90aWZpY2F0aW9uVHlwZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uSW5wdXQgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdOb3RpZmljYXRpb25EYXRhSW5wdXQnLFxuICBkZXNjcmlwdGlvbjogJ0RhdGEgZm9yIHJlZ2lzdGVyaW5nIGEgbm90aWZpY2F0aW9uIGlucHV0JyxcbiAgZmllbGRzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKE5vdGlmaWNhdGlvblR5cGVFbnVtKSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTm90aWZpY2F0aW9uIFR5cGUnLFxuICAgIH0sXG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246ICcoV2ViSG9vaykgVVJMIHRvIGNhbGwnLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uSWQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJyhQdXNoKSBOb3RpZmljYXRpb24gUXVldWUgSUQnLFxuICAgIH0sXG4gICAgZXh0cmE6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0pTT04gc3RyaW5nIGNvbnRhaW5pbmcgZXh0cmEgZGF0YSB0aGF0IHNob3VsZCBiZSBzZW50IHdpdGggdGhlIG1haW4gcGF5bG9hZCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgV2ViaG9va0NhbGwgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnV2ViaG9va0NhbGwnLFxuICBkZXNjcmlwdGlvbjogJ1dlYmhvb2sgQ2FsbCBJbmZvcm1hdGlvbicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICB0aW1lc3RhbXA6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxGbG9hdCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVRDIFVuaXggRXBvY2ggVGltZXN0YW1wIHdoZW4gdGhlIGNhbGwgaGFwcGVuZWQnLFxuICAgIH0sXG4gICAgc3RhdHVzQ29kZToge1xuICAgICAgdHlwZTogR3JhcGhRTEludCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSFRUUCBTdGF0dXMgQ29kZScsXG4gICAgfSxcbiAgICByZXNwb25zZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVzcG9uc2UgZnJvbSB0aGUgdGFyZ2V0IHNlcnZlcicsXG4gICAgfSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdOb3RpZmljYXRpb25EYXRhJyxcbiAgZGVzY3JpcHRpb246ICdOb3RpZmljYXRpb24gRGF0YScsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoTm90aWZpY2F0aW9uVHlwZUVudW0pLFxuICAgICAgZGVzY3JpcHRpb246ICdOb3RpZmljYXRpb24gVHlwZScsXG4gICAgfSxcbiAgICB1cmw6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJyhXZWJIb29rKSBVUkwgdG8gY2FsbCcsXG4gICAgfSxcbiAgICBub3RpZmljYXRpb25JZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnKFB1c2gpIE5vdGlmaWNhdGlvbiBRdWV1ZSBJRCcsXG4gICAgfSxcbiAgICBleHRyYToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSlNPTiBzdHJpbmcgY29udGFpbmluZyBleHRyYSBkYXRhIHRoYXQgc2hvdWxkIGJlIHNlbnQgd2l0aCB0aGUgbWFpbiBwYXlsb2FkJyxcbiAgICB9LFxuICB9KSxcbn0pO1xuIl19