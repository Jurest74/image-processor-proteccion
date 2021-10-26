import {types} from './types'

const initialState = {
    state: {
        image: null,
        status: null,
        originalHeight: null,
        originalWidth: null,
        orientation: 'vertical'
    }
};

export const imageProcessorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.imageUpload:
            console.log("entra", action);
            return {
                state: {
                    image: action.state.image,
                    status: action.state.status,
                    originalHeight: action.state.originalHeight,
                    originalWidth: action.state.originalWidth,
                    orientation: action.state.orientation
                },
            };
        default:
            return state;
    }
};