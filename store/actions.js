export const actionTypes = {
    SAMPLE: 'SAMPLE'
};

export const sampleAction = value => dispatch => {
    return dispatch({ type: actionTypes.SAMPLE, value });
};