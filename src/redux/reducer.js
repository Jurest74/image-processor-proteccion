import {types} from './types'

const initialState = {
    state: {
        image: null,
        status: null
    }
};

export const imageProcessorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.imageUpload:
            console.log("entra", action);
            return {
                state: {
                    image: action.state.image,
                    status: action.state.status
                },
            };
        default:
            return state;
    }
};