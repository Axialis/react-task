import styled from "styled-components";
import GitLogo from '../../assets/vector/gitlogo.svg'

const FooterStyle = styled.footer.attrs({
  className: `bg-sky-500 h-20 flex flex-row justify-center items-center font-sans	font-family: Roboto text-3xl gap-x-10`
})``;

const Logo = styled.img.attrs({
  className: `w-8`
})``;

function Footer() {
  return (
    <FooterStyle>
      2022 <Logo src={GitLogo} />
    </FooterStyle>
  );
}

export default Footer;