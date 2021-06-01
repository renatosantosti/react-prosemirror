'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toHtml;
function toHtml(serializer, doc) {
  var container = document.createElement('article');
  var serialized = serializer.serializeFragment(doc.content);
  container.appendChild(serialized);
  return container.innerHTML;
}