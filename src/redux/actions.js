import {types} from './types';

export const newImageUploaded = (src, status) => ({
    type: types.imageUpload,
    state: {
        image: src,
        status: status
    }
});