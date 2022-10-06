import styled from "styled-components";
import tw from 'twin.macro'

const InputStyle = styled.form.attrs({
    className: "flex flex-col justify-center items-start w-full",
})`
    &
    {input {${tw`flex bg-gray-50 border-2 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none`}}
    {input:focus {${tw` border-gray-900`}}
    {label {${tw`text-sm font-medium text-gray-900`}}}
    `

export const Input = (props: any) => {
    return (
        <InputStyle  onChange={e => console.log((e.target  as HTMLTextAreaElement).value, props.label)}>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </InputStyle>
    )
}