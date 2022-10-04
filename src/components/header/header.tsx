import styled from "styled-components";
const HeaderStyle = styled.header.attrs({
  className: `bg-sky-500 h-20 flex justify-center items-center font-sans	font-family: Roboto text-3xl`
})``;

function Header() {
  return (
    <HeaderStyle>
     Aliaksandr Semiankou
    </HeaderStyle>
  );
}

export default Header;