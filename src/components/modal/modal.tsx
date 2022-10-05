import styled from "styled-components";
import tw from 'twin.macro'
import { Button } from "../button/button";

const ModalStyle = styled.div`
${tw` fixed 
flex 
w-full 
h-full 
bg-transparent 
justify-center 
items-center
`}`

const DialodStyle = styled.div`
${tw`z-10
fixed 
flex
flex-col
justify-around
items-center
w-1/2 
h-1/2 
rounded-lg
bg-gray-50
shadow-2xl 
border-2 
`}`

function Modal() {
    return (
        <ModalStyle>
            <DialodStyle>
                <Button title='OK'/>
            </DialodStyle>
        </ModalStyle>
    )
}
export default Modal;