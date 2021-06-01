// @flow

export {EditorState} from 'prosemirror-state';
export {default as RichTextEditor} from './ui/RichTextEditor';
export {default as convertFromHTML} from './convertFromHTML';
export {default as convertFromJSON} from './convertFromJSON';
export {default as convertToJSON} from './convertToJSON';
export {default as convertToHTML} from './convertToHTML';
export {default as createEmptyEditorState} from './createEmptyEditorState';
export {default as isEditorStateEmpty} from './isEditorStateEmpty';
export {default as uuid} from './ui/uuid';
export class EnableImageUploadRuntime {
  // Image Upload
  canUploadImage(): boolean {
    return true;
  }

  uploadImage(file: File): Promise<ImageLike> {
    return new Promise((resolve, reject) => {
      const {FileReader} = window;
      if (FileReader) {
        const reader = new FileReader();
        reader.onload = event => {
          // base64 encoded url.
          const src = event.target.result;
          resolve({src, height: 0, width: 0, id: ''});
        };
        reader.onerror = () => {
          reject(new Error('FileReader failed'));
        };
        reader.readAsDataURL(file);
      } else {
        reject(new Error('FileReader is not available'));
      }
    });
  }
};
