const reducer = (state = { visi: false, message1: "", mmessage2: "", type: "" }, action) => {
    if (action.type === 'danger') {
        return action.payload;
    } else if (action.type === 'success') {
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;