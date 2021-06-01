'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnableImageUploadRuntime = exports.uuid = exports.isEditorStateEmpty = exports.createEmptyEditorState = exports.convertToHTML = exports.convertToJSON = exports.convertFromJSON = exports.convertFromHTML = exports.RichTextEditor = exports.EditorState = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _prosemirrorState = require('prosemirror-state');

Object.defineProperty(exports, 'EditorState', {
  enumerable: true,
  get: function get() {
    return _prosemirrorState.EditorState;
  }
});

var _RichTextEditor = require('./ui/RichTextEditor');

Object.defineProperty(exports, 'RichTextEditor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RichTextEditor).default;
  }
});

var _convertFromHTML = require('./convertFromHTML');

Object.defineProperty(exports, 'convertFromHTML', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertFromHTML).default;
  }
});

var _convertFromJSON = require('./convertFromJSON');

Object.defineProperty(exports, 'convertFromJSON', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertFromJSON).default;
  }
});

var _convertToJSON = require('./convertToJSON');

Object.defineProperty(exports, 'convertToJSON', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertToJSON).default;
  }
});

var _convertToHTML = require('./convertToHTML');

Object.defineProperty(exports, 'convertToHTML', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertToHTML).default;
  }
});

var _createEmptyEditorState = require('./createEmptyEditorState');

Object.defineProperty(exports, 'createEmptyEditorState', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createEmptyEditorState).default;
  }
});

var _isEditorStateEmpty = require('./isEditorStateEmpty');

Object.defineProperty(exports, 'isEditorStateEmpty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isEditorStateEmpty).default;
  }
});

var _uuid = require('./ui/uuid');

Object.defineProperty(exports, 'uuid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uuid).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnableImageUploadRuntime = exports.EnableImageUploadRuntime = function () {
  function EnableImageUploadRuntime() {
    (0, _classCallCheck3.default)(this, EnableImageUploadRuntime);
  }

  (0, _createClass3.default)(EnableImageUploadRuntime, [{
    key: 'canUploadImage',

    // Image Upload
    value: function canUploadImage() {
      return true;
    }
  }, {
    key: 'uploadImage',
    value: function uploadImage(file) {
      return new _promise2.default(function (resolve, reject) {
        var _window = window,
            FileReader = _window.FileReader;

        if (FileReader) {
          var reader = new FileReader();
          reader.onload = function (event) {
            // base64 encoded url.
            var src = event.target.result;
            resolve({ src: src, height: 0, width: 0, id: '' });
          };
          reader.onerror = function () {
            reject(new Error('FileReader failed'));
          };
          reader.readAsDataURL(file);
        } else {
          reject(new Error('FileReader is not available'));
        }
      });
    }
  }]);
  return EnableImageUploadRuntime;
}();

;
