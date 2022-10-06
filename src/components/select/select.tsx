import styled from "styled-components";
import tw from 'twin.macro'
import jsonSchema from "../../assets/json/schema.json"

const oceanList = JSON.parse(JSON.stringify(jsonSchema)).ocean.oneOf;
const listItem = oceanList.map((el: string) => <option key={el}>{el}</option>)

const SelectStyle = styled.select.attrs({
    className: "flex  justify-around w-full",
})`
    &
    {label {${tw`text-sm font-medium text-gray-900`}}}
    ${tw`border-2 rounded-lg p-2.5`}
    `

const GroupLaberStyle = styled.div`
${tw`flex flex-col justify-around w-full text-sm font-medium text-gray-900`}
`

export const Select = (props: any) => {
    return (
        <GroupLaberStyle>Your Favorite Ocean
            <SelectStyle  onChange={e => console.log(e.target.value)}>
                {listItem}
            </SelectStyle>
        </GroupLaberStyle>
    )
}