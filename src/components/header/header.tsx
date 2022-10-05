import styled from "styled-components";
import companyLogo from "../../assets/vector/company-logo.svg"
import tw from 'twin.macro'

const HeaderStyle = styled.footer`
${tw`bg-white
shadow-md
h-20
flex
flex-row
justify-start
px-10
items-center
font-sans
text-xl
gap-x-6
`}`

const Text = styled.span`
${tw`text-3xl text-gray-500`}
`

const Logo = styled.img`
${tw`w-16`}
`

export const Header = (props: any) => {
  return (
    <HeaderStyle {...props}>
    <Logo src={companyLogo}/>
    <Text>Great company</Text>
    </HeaderStyle>
  )
}