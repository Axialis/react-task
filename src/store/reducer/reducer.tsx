const initialState  = {
    value: '',
    phone: '',
    email: '',
    pass: '',
    repeatPass: '',
    firstName: '',
    lastName: '',
    sex: '',
    birthday: '',
    ocean: 'Atlantic',
    hobby: ''
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case "BUTTON": return { ...state, value: action.value };
        case "PHONE": return { ...state, phone: action.value };
        case "EMAIL": return { ...state, email: action.value };
        case "PASS": return { ...state, pass: action.value };
        case "REPEAT_PASS": return { ...state, repeatPass: action.value };
        case "FIRST_NAME": return { ...state, firstName: action.value };
        case "LAST_NAME": return { ...state, lastName: action.value };
        case "SEX": return { ...state, sex: action.value };
        case "BIRTHDAY": return { ...state, birthday: action.value };
        case "OCEAN": return { ...state, ocean: action.value };
        case "HOBBY": return { ...state, hobby: action.value };
        default: return state;
    }
}