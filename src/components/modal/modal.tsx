import styled from "styled-components";
import tw from 'twin.macro'
import { ContainerProps } from "../../types/types"
import store from "../../store";

const ModalStyle = styled.div.attrs({
    className: `bg-black bg-opacity-25`
})`
${tw` fixed 
flex 
w-full 
h-full 
// bg-transparent
justify-center 
items-center
`}`

const DialodStyle = styled.div.attrs({
    className: `min-h-[calc(500px)] min-w-[calc(320px)] max-w-[calc(500px)]`
})`
${tw`z-10
fixed 
flex
flex-col
justify-around
items-center
w-1/2 
py-10
rounded-lg
bg-gray-50
shadow-2xl 
border-2 
`}`

const PersonList = styled.p`
${tw`font-normal text-left w-72 bg-gray-100 border rounded-md border-gray-300 leading-8 px-5`}
`
function Modal(props: ContainerProps) {    
    return (
        <ModalStyle>
            <DialodStyle>
                <PersonList>First Name: {store.getState().firstName}</PersonList>             
                <PersonList>Last Name: {store.getState().lastName}</PersonList>             
                <PersonList>Phone: {store.getState().phone}</PersonList>             
                <PersonList>Sex: {store.getState().sex}</PersonList>             
                <PersonList>Birthday: {store.getState().birthday}</PersonList>             
                <PersonList>Password: {store.getState().pass}</PersonList>             
                <PersonList>Hobby: {store.getState().hobby}</PersonList>             
                <PersonList>Favorite ocean: {store.getState().ocean}</PersonList>             
                {props.children}
            </DialodStyle>
        </ModalStyle>
    )
}
export default Modal;