import {types} from './types';

export const newImageUploaded = (src, status, originalHeight, originalWidth, orientation) => ({
    type: types.imageUpload,
    state: {
        image: src,
        status: status,
        originalHeight: originalHeight,
        originalWidth: originalWidth,
        orientation: orientation
    }
});