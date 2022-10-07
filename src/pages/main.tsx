import styled from "styled-components";
import tw from 'twin.macro'
import { useState } from 'react'
import { Button } from "../components/button/button";
import { SingUpInfo } from "../components/sing-up-info/sing-up-info";
import { PersonalInfo } from "../components/personal-info/personal-info";
import Modal from "../components/modal/modal";
import store from "../store";
import { setPage } from "../store/actionCreator/action-creator";

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

    function isValidData(button: string) {
        if (button === 'next') {
            if (store.getState().valid_phone &&
                store.getState().valid_email &&
                store.getState().valid_pass &&
                store.getState().valid_repeatPass) {
                store.dispatch(setPage(button));
                setElement(button);
                return true;
            }
        }

        if (button === 'complete') {
            if (store.getState().valid_firstName &&
                store.getState().valid_lastName &&
                store.getState().valid_sex &&
                store.getState().valid_birthday &&
                store.getState().valid_ocean &&
                store.getState().valid_hobby) {
                store.dispatch( setPage(button));
                setElement(button);
                return true;
            }
        }
        return false;
    }
    

    if (element === 'complete') {
        return (
            <Modal>
                <div onClick={() => setElement('closeDialog')}>
                    <Button title='OK' id='closeDialog' reset='RESET_STORE' />
                </div>
            </Modal>
        )
    }
    if (element === 'closeDialog') {
        return (
            <MainStyle>
                <SingUpInfo>
                    <div onClick={() => isValidData('next')}>
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
                    <div onClick={() => isValidData('next')}>
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
                    <div onClick={() => isValidData('complete')}>
                        <Button title='Complete' id='complete' />
                    </div>
                </PersonalInfo>
            </MainStyle>
        )
    }
    return (
        <MainStyle>
            <SingUpInfo>
                <div onClick={() => isValidData('next')}>
                    <Button title='Next' id='next' />
                </div>
            </SingUpInfo>
        </MainStyle>
    )
}
export default Main;

