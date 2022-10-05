import styled from "styled-components";

const HeaderStyle = styled.footer.attrs(props => ({
  className: `  
  bg-white
  rounded-b-lg
  shadow-md
  h-20
  flex
  flex-row
  justify-center
  items-center
  font-sans
  font-family: Roboto
  text-xl
  gap-x-10
  ${Object.keys(props).join(' ')}
  `
}))``;

const Text = styled.span.attrs({
  className: `text-gray-500`
})``;

export const Header = (props: any) => {
  return (
    <HeaderStyle {...props}>
    <Text>HEADER</Text>
    </HeaderStyle>
  )
}