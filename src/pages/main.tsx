import styled from "styled-components";
import { Button } from "../components/button/button";

const MainStyle = styled.main.attrs({
className: `grow`
})``;

function Main() {
    return (
        <MainStyle>
        <Button title='PREV'/>
        <Button title='NEXT'/>
        </MainStyle>
    )
}
export default Main;