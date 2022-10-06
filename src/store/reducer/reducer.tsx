export function reducer(state = {value: ''}, action: any) {
    switch (action.type) {
        case "BUTTON": return { value: action.value };
        default: return state;
    }
}