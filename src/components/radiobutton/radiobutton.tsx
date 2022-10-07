import styled from "styled-components";
import tw from 'twin.macro'
import store from "../../store";
import { inputSex } from "../../store/actionCreator/action-creator";
import { validationSex } from "../../module/validator";

const RadioButtonStyle = styled.form.attrs({
    className: "flex  justify-around w-full",
})`
    &
    {input {${tw`flex bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5 outline-none`}}
    {input:focus {${tw` border-blue-600`}}
    {label {${tw`text-sm font-medium text-gray-900`}}}
    ${tw`border-2 rounded-lg p-2.5`}
    `

const GroupStyle = styled.div`
${tw`flex  gap-2`}
`
const GroupLaberStyle = styled.div`
${tw`flex flex-col justify-around w-full text-sm font-medium text-gray-900`}
`
function radiobuttonHandler(radiobutton: string) {
    store.dispatch(inputSex(radiobutton));
    store.dispatch({ type: 'VALID_SEX', value: validationSex()});
}

export const RadioButton = (props: any) => {
    return (
        <GroupLaberStyle>Sex
            <RadioButtonStyle>
                <GroupStyle>
                    <input type={props.type} name={props.name} onChange={() => radiobuttonHandler('male')}/>
                    <label>{props.label1}</label>
                </GroupStyle>
                <GroupStyle>
                    <input type={props.type} name={props.name} onChange={() => radiobuttonHandler('female')}/>
                    <label>{props.label2}</label>
                </GroupStyle>
            </RadioButtonStyle>
        </GroupLaberStyle>
    )
}