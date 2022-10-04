import styled from "styled-components";

const MainStyle = styled.main.attrs({
    className: `h-[calc(100vh_-_10rem)]`
})``;

function Main() {
    return (
        <MainStyle>
            MAIN PAG$E TEXT
        </MainStyle>
    )
}
export default Main;