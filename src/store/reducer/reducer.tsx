const initialState = {
    page: '',
    value: '',
    phone: '',
    email: '',
    pass: '',
    repeatPass: '',
    firstName: '',
    lastName: '',
    sex: '',
    birthday: '',
    ocean: '',
    hobby: '',
    valid_phone: false,
    valid_email: false,
    valid_pass: false,
    valid_repeatPass: false,
    valid_firstName: false,
    valid_lastName: false,
    valid_sex: false,
    valid_birthday: false,
    valid_ocean: false,
    valid_hobby: false,
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case "PAGE": return { ...state, page: action.value };
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
        case "VALID_PHONE": return { ...state, valid_phone: action.value };
        case "VALID_EMAIL": return { ...state, valid_email: action.value };
        case "VALID_PASS": return { ...state, valid_pass: action.value };
        case "VALID_REPEAT_PASS": return { ...state, valid_repeatPass: action.value };
        case "VALID_FIRST_NAME": return { ...state, valid_firstName: action.value };
        case "VALID_LAST_NAME": return { ...state, valid_lastName: action.value };
        case "VALID_SEX": return { ...state, valid_sex: action.value };
        case "VALID_BIRTHDAY": return { ...state, valid_birthday: action.value };
        case "VALID_OCEAN": return { ...state, valid_ocean: action.value };
        case "VALID_HOBBY": return { ...state, valid_hobby: action.value };
        case "RESET_STORE": return initialState;
        default: return state;
    }
}