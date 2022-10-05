import styled from "styled-components";

const MainStyle = styled.main.attrs({
    className: `h-[calc(100vh_-_10rem_-_3.5rem)]`
})``;

function Main() {
    return (
        <MainStyle>
            MAIN
        </MainStyle>
    )
}
export default Main;