import styled from "styled-components";
import GitLogo from '../../assets/vector/gitlogo.svg'
import tw from 'twin.macro'

const FooterStyle = styled.footer`
${tw` bg-white
shadow-inner
h-20
flex
flex-row
justify-center
items-center
font-sans
gap-x-10
`}`

const Logo = styled.img`
${tw`w-8 cursor-pointer hover:animate-spin`}
`
const Text = styled.span`
${tw`text-gray-500`}
`
export const Footer = (props: any) => {
  return (
    <FooterStyle {...props}>
      <Text>Aliaksand</Text>
      <Logo src={GitLogo} onClick={() => window.open("https://github.com/axialis", "_blank")} />
      <Text>Semiankou</Text>
    </FooterStyle>
  )
}


