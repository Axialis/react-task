import styled from "styled-components";
import tw from 'twin.macro'
import { ContainerProps } from "../../types/types"
import { Input } from "../../components/input/input"
import { RadioButton } from "../radiobutton/radiobutton";
import { Select } from "../select/select";
import { CheckBox } from "../checkbox/checkbox";

const PersonalInfoStyle = styled.div.attrs({
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
${tw` flex flex-col w-7/12 items-center justify-center flex-grow gap-y-5 py-2`}`


export const PersonalInfo = (props: ContainerProps) => {
    return (
        <PersonalInfoStyle>
            <InputPosition>
                <Input type="text" placeholder="John" label="First name"></Input>
                <Input type="text" placeholder="Doe" label="Last name"></Input>
                <RadioButton type="radio" label1="Male" label2="Female" name="sex"></RadioButton>
                <Input type="date" placeholder="Doe" label="Birthday"></Input>
                <Select/>
                <CheckBox></CheckBox>
            </InputPosition>
            <ButtonPosition>
                {props.children}
            </ButtonPosition>
        </PersonalInfoStyle>
    )
}