import styled from "styled-components";
import GitLogo from '../../assets/vector/gitlogo.svg'
import tw from 'twin.macro'

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

const Logo = styled.img`
${tw`w-8 cursor-pointer hover:animate-spin`}
`

const Text = styled.span.attrs({
  className: `text-gray-500`
})``;

export const Footer = (props: any) => {
  return (
    <FooterStyle {...props}>
      <Text>Aliaksand Semiankou</Text>
      <Logo src={GitLogo} onClick={() => window.open("https://github.com/axialis", "_blank")}/>
    </FooterStyle>
  )
}


