import styled from "styled-components";
import tw from 'twin.macro'
import jsonSchema from "../../assets/json/schema.json"
import store from "../../store";
import { inputHobby } from "../../store/actionCreator/action-creator";
import { validationHobby } from "../../module/validator";

const hobbyList = JSON.parse(JSON.stringify(jsonSchema)).hobby.anyOf;
let checkboxList:string[] = [];

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
function checkboxHandler(name: string, value: boolean) {
    checkboxList = store.getState().hobby.split(' ').slice();
    if(value === true) {
        checkboxList.push(name);
    } else if (checkboxList.indexOf(name) !== -1) {
        checkboxList.splice(checkboxList.indexOf(name), 1);
    }
        store.dispatch(inputHobby(checkboxList.join(" ")));
        store.dispatch({ type: 'VALID_HOBBY', value: validationHobby()});
}

const listItem = hobbyList.map((el: string, index: number) => {
    return (
    <GroupStyle key={el}>
        <input type="checkbox" name={el} onChange={e => checkboxHandler(e.target.name, e.target.checked)}/>
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