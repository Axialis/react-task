import styled from "styled-components";
import tw from 'twin.macro'
import { ContainerProps } from "../../types/types"
import { Input } from "../../components/input/input"
import store from "../../store";

const SingUpStyle = styled.div.attrs({
    className: `min-h-[calc(70vh)] min-w-[calc(320px)]`
})`
${tw`flex
flex-col
bg-gray-50
shadow-2xl
rounded-lg
w-3/6
max-w-screen-md
justify-between
items-center
py-2
`}
`

const ButtonPosition = styled.div`
${tw` flex flex-row justify-end w-11/12 h-16 m-5 gap-x-2`}`


const InputPosition = styled.div`
${tw` flex flex-col w-7/12 items-center justify-center flex-grow gap-y-5`}`


export const SingUpInfo = (props: ContainerProps) => {
    return (
        <SingUpStyle>
            <InputPosition>
                <Input type={"tel"} placeholder={"+375291234567"} label={"Mobile phone"} defaultValue={store.getState().phone}></Input>
                <Input type={"email"} placeholder={"john@company.by"} label={"E-mail"}  defaultValue={store.getState().email}></Input>
                <Input type={"password"} placeholder={"•••••••••"} label={"Password"}  defaultValue={store.getState().pass}></Input>
                <Input type={"password"} placeholder={"•••••••••"} label={"Repeat Password"}  defaultValue={store.getState().repeatPass}></Input>
            </InputPosition>

            <ButtonPosition>
                {props.children}
            </ButtonPosition>
        </SingUpStyle>
    )
}