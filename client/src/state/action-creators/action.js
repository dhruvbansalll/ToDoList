export const showDanger = (alert) => {
    return (dispatch) => {
        dispatch({
            type: 'danger',
            payload: alert
        })
    }
}

export const showSuccess = (alert) => {
    return (dispatch) => {
        dispatch({
            type: 'success',
            payload: alert
        })
    }
}