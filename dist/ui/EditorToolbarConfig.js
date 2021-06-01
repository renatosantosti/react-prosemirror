'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMMAND_GROUPS = exports.TABLE_COMMANDS_GROUP = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.parseLabel = parseLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EditorCommands = require('../EditorCommands');

var EditorCommands = _interopRequireWildcard(_EditorCommands);

var _FontSizeCommandMenuButton = require('./FontSizeCommandMenuButton');

var _FontSizeCommandMenuButton2 = _interopRequireDefault(_FontSizeCommandMenuButton);

var _FontTypeCommandMenuButton = require('./FontTypeCommandMenuButton');

var _FontTypeCommandMenuButton2 = _interopRequireDefault(_FontTypeCommandMenuButton);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_LABEL_PATTERN = /\[([A-Za-z_\d]+)\](.*)/;

// eslint-disable-next-line no-unused-vars
function parseLabel(input) {
  var matched = input.match(ICON_LABEL_PATTERN);
  if (matched) {
    var _matched = (0, _slicedToArray3.default)(matched, 3),

    // eslint-disable-next-line no-unused-vars
    all = _matched[0],
        icon = _matched[1],
        label = _matched[2];

    return {
      icon: icon ? _Icon2.default.get(icon) : null,
      title: label || null
    };
  }
  return {
    icon: null,
    title: input || null
  };
}

var CLEAR_FORMAT = EditorCommands.CLEAR_FORMAT,
    EM = EditorCommands.EM,
    H1 = EditorCommands.H1,
    H2 = EditorCommands.H2,
    H3 = EditorCommands.H3,
    HISTORY_REDO = EditorCommands.HISTORY_REDO,
    HISTORY_UNDO = EditorCommands.HISTORY_UNDO,
    HR = EditorCommands.HR,
    IMAGE_UPLOAD = EditorCommands.IMAGE_UPLOAD,
    INDENT_LESS = EditorCommands.INDENT_LESS,
    INDENT_MORE = EditorCommands.INDENT_MORE,
    LINK_SET_URL = EditorCommands.LINK_SET_URL,
    OL = EditorCommands.OL,
    STRIKE = EditorCommands.STRIKE,
    STRONG = EditorCommands.STRONG,
    SUPER = EditorCommands.SUPER,
    TABLE_ADD_COLUMN_AFTER = EditorCommands.TABLE_ADD_COLUMN_AFTER,
    TABLE_ADD_COLUMN_BEFORE = EditorCommands.TABLE_ADD_COLUMN_BEFORE,
    TABLE_ADD_ROW_AFTER = EditorCommands.TABLE_ADD_ROW_AFTER,
    TABLE_ADD_ROW_BEFORE = EditorCommands.TABLE_ADD_ROW_BEFORE,
    TABLE_BACKGROUND_COLOR = EditorCommands.TABLE_BACKGROUND_COLOR,
    TABLE_DELETE_COLUMN = EditorCommands.TABLE_DELETE_COLUMN,
    TABLE_DELETE_ROW = EditorCommands.TABLE_DELETE_ROW,
    TABLE_DELETE_TABLE = EditorCommands.TABLE_DELETE_TABLE,
    TABLE_INSERT_TABLE = EditorCommands.TABLE_INSERT_TABLE,
    TABLE_MERGE_CELLS = EditorCommands.TABLE_MERGE_CELLS,
    TABLE_SPLIT_ROW = EditorCommands.TABLE_SPLIT_ROW,
    TEXT_ALIGN_CENTER = EditorCommands.TEXT_ALIGN_CENTER,
    TEXT_ALIGN_JUSTIFY = EditorCommands.TEXT_ALIGN_JUSTIFY,
    TEXT_ALIGN_LEFT = EditorCommands.TEXT_ALIGN_LEFT,
    TEXT_ALIGN_RIGHT = EditorCommands.TEXT_ALIGN_RIGHT,
    TEXT_COLOR = EditorCommands.TEXT_COLOR,
    TEXT_HIGHLIGHT = EditorCommands.TEXT_HIGHLIGHT,
    TEXT_LINE_SPACINGS = EditorCommands.TEXT_LINE_SPACINGS,
    UL = EditorCommands.UL,
    UNDERLINE = EditorCommands.UNDERLINE;
var TABLE_COMMANDS_GROUP = exports.TABLE_COMMANDS_GROUP = [{
  'Inserir Tabela': TABLE_INSERT_TABLE
}, {
  'Cor de Fundo': TABLE_BACKGROUND_COLOR
  //'Border Color....': TABLE_BORDER_COLOR,
}, {
  'Inserir Coluna Antes': TABLE_ADD_COLUMN_BEFORE,
  'Inserir Coluna Depois': TABLE_ADD_COLUMN_AFTER,
  'Apagar Coluna': TABLE_DELETE_COLUMN
}, {
  'Inserir Linha Antes': TABLE_ADD_ROW_BEFORE,
  'Inserir Linha Depois': TABLE_ADD_ROW_AFTER,
  'Apagar Linha': TABLE_DELETE_ROW
}, {
  'Mesclar Celulas': TABLE_MERGE_CELLS,
  'Dividir Celulas': TABLE_SPLIT_ROW
},
// Disable these commands cause user rarely use them.
//{
//  'Toggle Header Column': TABLE_TOGGLE_HEADER_COLUMN,
//  'Toggle Header Row': TABLE_TOGGLE_HEADER_ROW,
//  'Toggle Header Cells': TABLE_TOGGLE_HEADER_CELL,
//},
{
  'Apagar Tabela': TABLE_DELETE_TABLE
}];

var COMMAND_GROUPS = exports.COMMAND_GROUPS = [{
  '[undo] Desfazer': HISTORY_UNDO,
  '[redo] Refazer': HISTORY_REDO
}, {
  '[grid_on] Tabela...': TABLE_COMMANDS_GROUP
}, {
  '[H] Títulos...': [{
    'Título 1': H1,
    'Título 2': H2,
    'Título 3': H3
    // 'Header 4': H4,
    // 'Header 5': H5,
    // 'Header 6': H6,
  }]
}, {
  '[font_download] Fonte': _FontTypeCommandMenuButton2.default
}, {
  '[format_size] Tamanho da Fonte': _FontSizeCommandMenuButton2.default
}, {
  '[format_bold] Negrito': STRONG,
  '[format_italic] Itálico': EM,
  '[format_underline] Sublinhado': UNDERLINE,
  '[format_strikethrough] Tachado': STRIKE,
  '[superscript] Sobrescrito': SUPER
}, {
  '[format_color_text] Cor do texto': TEXT_COLOR,
  '[border_color] Cor de fundo': TEXT_HIGHLIGHT
}, {
  '[link] Link': LINK_SET_URL,
  '[image] Figura': IMAGE_UPLOAD
  // '[image] Insert image': [
  //   {
  //     'Insert image by URL': IMAGE_FROM_URL,
  //     'Upload image from computer': IMAGE_UPLOAD,
  //   },
  //],
}, {
  '[format_align_left] Esquerda': TEXT_ALIGN_LEFT,
  '[format_align_center] Centro': TEXT_ALIGN_CENTER,
  '[format_align_right] Direita': TEXT_ALIGN_RIGHT,
  '[format_align_justify] Justificado': TEXT_ALIGN_JUSTIFY
}, {
  '[format_line_spacing] Espaço entre linhas': TEXT_LINE_SPACINGS,
  '[hr] Linha horizontal': HR
}, {
  '[format_list_bulleted] Lista': UL,
  '[format_list_numbered] Lista Ordenada': OL
}, {
  '[format_indent_increase] Identar mais': INDENT_MORE,
  '[format_indent_decrease] Identar menos': INDENT_LESS
}, {
  '[format_clear] Limpar formatação': CLEAR_FORMAT
}];