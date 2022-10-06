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
    inputRepeatPass } from "../../store/actionCreator/action-creator";
    import { validationEmail } from "../../module/validator";

const InputStyle = styled.form.attrs({
    className: "flex flex-col justify-center items-start w-full",
})`
    &
    {input {${tw`flex bg-gray-50 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none`}}
    {input:focus {${tw` border-gray-900`}}
    {label {${tw`text-sm font-medium text-gray-900`}}}
    `


function changeHadler(value: any, label: any) {
    validationEmail((value.target as HTMLTextAreaElement).value);
    if (label === "Mobile phone") {
        store.dispatch(inputPhoneNumber((value.target as HTMLTextAreaElement).value));
    }
    if (label === "E-mail") {
        store.dispatch(inputEmail((value.target as HTMLTextAreaElement).value));
    }
    if (label === "Password") {
        store.dispatch(inputPassword((value.target as HTMLTextAreaElement).value));
    }
    if (label === "Repeat Password") {
        store.dispatch(inputRepeatPass((value.target as HTMLTextAreaElement).value));
    }
    if (label === "First name") {
        store.dispatch(inputFirstName((value.target as HTMLTextAreaElement).value));
    }
    if (label === "Last name") {
        store.dispatch(inputLastName((value.target as HTMLTextAreaElement).value));
    }
    if (label === "Birthday") {
        store.dispatch(inputBirthday((value.target as HTMLTextAreaElement).value));
    }
}

export const Input = (props: any) => {
    return (
        <InputStyle onChange={e => changeHadler(e, props.label)}>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </InputStyle>
    )
}