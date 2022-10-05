import styled from "styled-components";
import GitLogo from '../../assets/vector/gitlogo.svg'

const FooterStyle = styled.footer.attrs(props => ({
  className: `  
  bg-white
  shadow-inner
  h-20
  flex
  flex-row
  justify-center
  items-center
  font-sans
  font-family: Roboto
  text-sl
  gap-x-10
  ${Object.keys(props).join(' ')}
  `
}))``;

const Logo = styled.img.attrs({
  className: `
  w-8
  `
})``;

const Text = styled.span.attrs({
  className: `text-gray-500`
})``;

export const Footer = (props: any) => {
  return (
    <FooterStyle {...props}>
    <Text>2022</Text>
      <Logo src={GitLogo}/>
    </FooterStyle>
  )
}


