import styled from "styled-components";
import tw from 'twin.macro'
import jsonSchema from "../../assets/json/schema.json"
import { inputOcean } from "../../store/actionCreator/action-creator";
import store from "../../store";
import { validationOcean } from "../../module/validator";

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
function selectHandler(item: any) {
    store.dispatch(inputOcean(item.target.value));
    store.dispatch({type: 'VALID_OCEAN', value: validationOcean()});
}

export const Select = () => {
    return (
        <GroupLaberStyle>Your Favorite Ocean
            <SelectStyle onChange={e => selectHandler(e)}>
                <option></option>
                {listItem}
            </SelectStyle>
        </GroupLaberStyle>
    )
}