import styled from "styled-components";
import tw from 'twin.macro'
import { Button } from "../components/button/button";
// import { SingUpInfo } from "../components/sing-up-info/sing-up-info";
import { PersonalInfo } from "../components/personal-info/personal-info";

const MainStyle = styled.main.attrs({
className: `min-h-[calc(100vh_-_220px)]`})`
${tw`
bg-gray-200
flex
flex-col
justify-center 
items-center
`}`;

function Main() {
    return (
        <MainStyle>
            {/* <SingUpInfo>
                <Button title='Next' />
            </SingUpInfo> */}
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
            <PersonalInfo>
                <Button title='Change SignUp' />
                <Button title='Complete' />
            </PersonalInfo>
        </MainStyle>
    )
}
export default Main;