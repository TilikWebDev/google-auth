const GOOGLE_OAUTH2 = 'GOOGLE_OAUTH2';

let initialState = {
   
};

//thunk

export const googleOAuth2 = (googleResponse) => {
    return async (dispatch) => {
        if (typeof googleResponse === 'undefined') {
            googleResponse = [];
        }

        dispatch({ type: GOOGLE_OAUTH2, googleResponse });
    };
};

//

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_OAUTH2: {
          return action.googleResponse;
        }

        default:
          return state;
      }
}

export default authReducer;