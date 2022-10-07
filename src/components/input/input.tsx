import styled from "styled-components";
import tw from 'twin.macro'
import store from "../../store/index"
import {
    inputBirthday,
    inputEmail,
    inputFirstName,
    inputLastName,
    inputPassword,
    inputPhoneNumber,
    inputRepeatPass
} from "../../store/actionCreator/action-creator";

import {
    validationEmail,
    validationAge,
    validationName,
    validationPassword,
    validationPasswordMatching,
    validationPhone,
} from "../../module/validator";

const InputStyle = styled.form.attrs({
    className: "flex flex-col justify-center items-start w-full",
})`
    &
    {input {${tw`flex bg-gray-50 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none`}}
    {input:focus {${tw` border-gray-900`}}
    {label {${tw`text-sm font-medium text-gray-900`}}}
    `


function changeHadler(value: any, label: any) {
    if (label === "Mobile phone") {
        store.dispatch({ type: "VALID_PHONE", value: validationPhone(value) });
        store.dispatch(inputPhoneNumber(value));
    }
    if (label === "E-mail") {
        store.dispatch({ type: "VALID_EMAIL", value: validationEmail(value) });
        store.dispatch(inputEmail(value));
    }
    if (label === "Password") {
        store.dispatch({ type: "VALID_PASS", value: validationPassword(value) });
        store.dispatch(inputPassword(value));
    }
    if (label === "Repeat Password") {
        store.dispatch({ type: "VALID_REPEAT_PASS", value: validationPasswordMatching(store.getState().pass, value) });
        store.dispatch(inputRepeatPass(value));
    }
    if (label === "First name") {
        store.dispatch({ type: "VALID_FIRST_NAME", value: validationName(value) });
        store.dispatch(inputFirstName(value));
    }
    if (label === "Last name") {
        store.dispatch({ type: "VALID_LAST_NAME", value: validationName(value) });
        store.dispatch(inputLastName(value));
    }
    if (label === "Birthday") {
        store.dispatch({ type: "VALID_BIRTHDAY", value: validationAge(value) });
        store.dispatch(inputBirthday(value));
    }
}

export const Input = (props: any) => {
    return (
        <InputStyle onChange={(e) => { changeHadler(((e.target as HTMLTextAreaElement).value), props.label) }}>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} defaultValue={props.defaultValue} />
        </InputStyle >
    )
}