import styled from "styled-components";
import tw from 'twin.macro'
import jsonSchema from "../../assets/json/schema.json"

const hobbyList = JSON.parse(JSON.stringify(jsonSchema)).hobby.anyOf;


const SelectStyle = styled.div.attrs({
    className: "flex  justify-around w-full flex-wrap",
})`
    &
    {input {${tw`flex bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5 outline-none`}}
    {input:focus {${tw` border-blue-600`}}
    {label {${tw`text-sm font-medium text-gray-900`}}}
    ${tw`border-2 rounded-lg p-2.5`}
    `

const GroupLaberStyle = styled.div`
${tw`flex flex-col justify-around w-full text-sm font-medium text-gray-900`}
`
const GroupStyle = styled.div`
${tw`flex w-1/2 gap-2`}
`
const listItem = hobbyList.map((el: string, index: number) => {
    return (
    <GroupStyle key={el}>
        <input type="checkbox"/>
        <label key={el}>{el}</label>
    </GroupStyle>
    )

})
export const CheckBox = (props: any) => {
    return (
        <GroupLaberStyle>Your Hobby
            <SelectStyle>
                    {listItem}
            </SelectStyle>
        </GroupLaberStyle>
    )
}