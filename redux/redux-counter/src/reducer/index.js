const reducerFn = (state=0, action) => {
    switch (action.type) {
        case "Inc":
            return state + 1;

        case "Dec":
            return state - 1;

        default:
            return state;
    }
}

export default reducerFn;