import styled from "styled-components";
import tw from 'twin.macro'
import { useState } from 'react'
import { Button } from "../components/button/button";
import { SingUpInfo } from "../components/sing-up-info/sing-up-info";
import { PersonalInfo } from "../components/personal-info/personal-info";
import Modal from "../components/modal/modal";
import store from "../store";
import { setPage } from "../store/actionCreator/action-creator";
import jsonSchema from "../assets/json/schema.json"

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
            if ( 
                JSON.parse(JSON.stringify(jsonSchema)).mobilePhone.required ? store.getState().valid_phone : true &&
                JSON.parse(JSON.stringify(jsonSchema)).email.required ? store.getState().valid_email : true &&
                JSON.parse(JSON.stringify(jsonSchema)).password.required ? store.getState().valid_pass : true &&
                JSON.parse(JSON.stringify(jsonSchema)).password.required ? store.getState().valid_repeatPass :  true) {
                store.dispatch(setPage(button));
                setElement(button);
                return true;
            }
        }

        if (button === 'complete') {
            if (
                JSON.parse(JSON.stringify(jsonSchema)).firstName.required ? store.getState().valid_firstName :true &&
                JSON.parse(JSON.stringify(jsonSchema)).firstName.required ? store.getState().valid_lastName : true &&
                JSON.parse(JSON.stringify(jsonSchema)).sex.required ? store.getState().valid_sex : true &&
                JSON.parse(JSON.stringify(jsonSchema)).birthday.required ? store.getState().valid_birthday : true &&
                JSON.parse(JSON.stringify(jsonSchema)).ocean.required ? store.getState().valid_ocean : true &&
                JSON.parse(JSON.stringify(jsonSchema)).hobby.required ? store.getState().valid_hobby : true
                ) {
                store.dispatch(setPage(button));
                setElement(button);
                return true;
            }
        }
        return false;
    }

    function setNewPage(button: string) {        
        setElement(button);
        store.dispatch(setPage(button));
    }


    if (element === 'complete') {
        return (
            <Modal>
                <div onClick={() => setNewPage('closeDialog')}>
                    <Button title='OK' id='closeDialog' reset='RESET_STORE' />
                </div>
            </Modal>
        )
    }
    if (element === 'closeDialog') {
        return (
            <MainStyle>
                <SingUpInfo>
                    <div onClick={() => setNewPage('')}>
                        <Button title='Next' id='' />
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
                    <div onClick={() => setNewPage('changeSingUp')}>
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

