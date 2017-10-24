'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Lucas Teske on 09/05/17.
 * 
 */

/**
 * Applies data to a template string
 * @param templateStr
 * @param templateData
 * @returns {string}
 */
var TemplateProcess = function TemplateProcess(templateStr, templateData) {
  if (!(typeof templateStr === 'string')) {
    throw new TypeError('Value of argument "templateStr" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(templateStr));
  }

  var formatted = templateStr;

  if (templateData !== undefined && templateData !== null) {
    var keys = Object.keys(templateData);
    for (var i = 0; i < keys.length; i++) {
      formatted = formatted.replace(new RegExp('{' + keys[i].toUpperCase() + '}', 'g'), templateData[keys[i]]);
    }
  }

  return formatted;
};

exports.default = TemplateProcess;

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : _typeof(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      if (depth > maxDepth) return '[...]';

      var first = _inspect(input[0], depth);

      if (input.every(function (item) {
        return _inspect(item, depth) === first;
      })) {
        return first.trim() + '[]';
      } else {
        return '[' + input.slice(0, maxKeys).map(function (item) {
          return _inspect(item, depth);
        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
      }
    } else {
      return 'Array';
    }
  } else {
    var keys = Object.keys(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVByb2Nlc3MiLCJ0ZW1wbGF0ZVN0ciIsInRlbXBsYXRlRGF0YSIsImZvcm1hdHRlZCIsInVuZGVmaW5lZCIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwicmVwbGFjZSIsIlJlZ0V4cCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQU1BOzs7Ozs7QUFNQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFdBQUQsRUFBc0JDLFlBQXRCLEVBQTRDO0FBQUEsZUFBM0NELFdBQTJDO0FBQUEsdUhBQTNDQSxXQUEyQztBQUFBOztBQUNsRSxNQUFJRSxZQUFZRixXQUFoQjs7QUFFQSxNQUFJQyxpQkFBaUJFLFNBQWpCLElBQThCRixpQkFBaUIsSUFBbkQsRUFBeUQ7QUFDdkQsUUFBTUcsT0FBT0MsT0FBT0QsSUFBUCxDQUFZSCxZQUFaLENBQWI7QUFDQSxTQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDSixrQkFBWUEsVUFBVU0sT0FBVixDQUFrQixJQUFJQyxNQUFKLE9BQWVMLEtBQUtFLENBQUwsRUFBUUksV0FBUixFQUFmLFFBQXlDLEdBQXpDLENBQWxCLEVBQWlFVCxhQUFhRyxLQUFLRSxDQUFMLENBQWIsQ0FBakUsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0osU0FBUDtBQUNELENBWEQ7O2tCQWFlSCxlIiwiZmlsZSI6InRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEx1Y2FzIFRlc2tlIG9uIDA5LzA1LzE3LlxuICogQGZsb3dcbiAqL1xuXG5cbi8qKlxuICogQXBwbGllcyBkYXRhIHRvIGEgdGVtcGxhdGUgc3RyaW5nXG4gKiBAcGFyYW0gdGVtcGxhdGVTdHJcbiAqIEBwYXJhbSB0ZW1wbGF0ZURhdGFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IFRlbXBsYXRlUHJvY2VzcyA9ICh0ZW1wbGF0ZVN0cjogc3RyaW5nLCB0ZW1wbGF0ZURhdGE6IGFueSkgPT4ge1xuICBsZXQgZm9ybWF0dGVkID0gdGVtcGxhdGVTdHI7XG5cbiAgaWYgKHRlbXBsYXRlRGF0YSAhPT0gdW5kZWZpbmVkICYmIHRlbXBsYXRlRGF0YSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZURhdGEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UobmV3IFJlZ0V4cChgeyR7a2V5c1tpXS50b1VwcGVyQ2FzZSgpfX1gLCAnZycpLCB0ZW1wbGF0ZURhdGFba2V5c1tpXV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVByb2Nlc3M7Il19