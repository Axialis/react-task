import styled from "styled-components";
import tw from 'twin.macro'
import { useState } from 'react'
import { Button } from "../components/button/button";
import { SingUpInfo } from "../components/sing-up-info/sing-up-info";
import { PersonalInfo } from "../components/personal-info/personal-info";
import Modal from "../components/modal/modal";

const MainStyle = styled.main.attrs({
    className: `min-h-[calc(100vh_-_220px)]`
})`
${tw`
bg-gray-200
flex
flex-col
justify-center 
items-center
`}`;

function Main() {
    const [element, setElement] = useState('')

    if (element === 'complete') {
        return (
            <Modal>
                <div onClick={() => setElement('closeDialog')}>
                    <Button title='OK' id='closeDialog' reset='RESET_STORE'/>
                </div>
            </Modal>
        )
    }
    if (element === 'closeDialog') {
        return (
            <MainStyle>
                <SingUpInfo>
                    <div onClick={() => setElement('next')}>
                        <Button title='Next' id='next' />
                    </div>
                </SingUpInfo>
            </MainStyle>
        )
    }
    if (element === 'changeSingUp') {
        return (
            <MainStyle>
                <SingUpInfo>
                    <div onClick={() => setElement('next')}>
                        <Button title='Next' id='next' />
                    </div>
                </SingUpInfo>
            </MainStyle>
        )
    }

    if (element === 'next') {
        return (
            <MainStyle>
                <PersonalInfo>
                    <div onClick={() => setElement('changeSingUp')}>
                        <Button title='Change SignUp' id='changeSingUp' />
                    </div>
                    <div onClick={() => setElement('complete')}>
                        <Button title='Complete' id='complete' />
                    </div>
                </PersonalInfo>
            </MainStyle>
        )
    }
    return (
        <MainStyle>
            <SingUpInfo>
                <div onClick={() => setElement('next')}>
                    <Button title='Next' id='next' />
                </div>
            </SingUpInfo>
        </MainStyle>
    )
}
export default Main;

